const express = require("express");
const { Deta } = require("deta");
const argon2 = require("argon2");
const router = express.Router();

// deta
const deta = Deta();
const loginDB = deta.Base("login");

// info about this route
router.get("/info", (req, res) => {
    res.status(200).send(
        "This route is reserved for everything related to authentication."
    );
});

// register a new user (approval required)
// NOTE: username gets saved as key => throws error if not unique
router.post("/registration", async (req, res) => {
    try {
        const uname = req.body.username;
        const pswd = req.body.password;

        const existing = await loginDB.get(uname);
        if (existing !== null) {
            res.status(409).json({
                error: "This username is already taken. Please choose another one.",
                success: false,
            });
        }

        const hash = await argon2.hash(pswd);
        const toCreate = { key: uname, passwordHash: hash, isApproved: false };
        const toInsert = await loginDB.insert(toCreate);
        res.status(201).json({ success: true, username: toInsert.key });
    } catch (err) {
        res.status(503).json({ error: "Database Error" });
    }
});

// log in as a registered user
router.post("/login", async (req, res) => {
    try {
        const uname = req.body.username;
        const pswd = req.body.password;

        const existing = await loginDB.get(uname);
        if (existing === null) {
            res.status(401).json({
                error: "Didn't find user with this username.",
                success: false,
            });
        }

        if (existing.isApproved === false) {
            res.status(403).json({
                error: "Action fobidden. Contact an administrator for approval.",
            });
        }

        if (await argon2.verify(existing.passwordHash, pswd)) {
            req.session.views += 1;
            res.send(
                "Correct password. Session expires in: " +
                    req.session.cookie.maxAge
            );
        } else {
            res.send("Wrong password!");
        }
    } catch (error) {
        res.status(503).json({ error: "Database Error" });
    }
});

module.exports = router;
