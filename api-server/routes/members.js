const express = require("express");
const { Deta } = require("deta");
const router = express.Router();
const { checkAuth } = require("../middleware/checkAuth");

// deta
const deta = Deta(process.env.DB_DATA_KEY);
const membersDB = deta.Base("members");

// info about this route
router.get("/info", (req, res) => {
    res.status(200).send(
        "This route is reserved for everything related to team members."
    );
});

// get all objects in DB
router.get("/", async (req, res) => {
    try {
        const members = await membersDB.fetch();
        res.status(200).json(members);
    } catch (error) {
        res.status(503).json({ error: "Database Error" });
    }
});

// get single object by key from DB
router.get("/:key", async (req, res) => {
    try {
        const key = req.params.key;
        const value = await membersDB.get(key);
        if (value === null) {
            res.status(404).json({ error: "No value found at " + key });
        }
        res.status(200).json(value);
    } catch (error) {
        res.status(503).json({ error: "Database Error" });
    }
});

// insert new object into DB
router.post("/", checkAuth, async (req, res) => {
    try {
        const { name, funktionIG, teamrolle, comment, imgPath } = req.body;
        const toCreate = { name, funktionIG, teamrolle, comment, imgPath };
        const toInsert = await membersDB.insert(toCreate);
        res.status(201).json(toInsert);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
});

// alter exisiting object in DB
router.put("/", checkAuth, async (req, res) => {
    try {
        const { key, name, funktionIG, teamrolle, comment, imgPath } = req.body;
        const toAlter = await membersDB.update(
            {
                name,
                funktionIG,
                teamrolle,
                comment,
                imgPath,
            },
            key
        );
        res.status(200).json(toAlter);
    } catch (error) {
        res.status(503).json({ error: "Database Error" });
    }
});

// delete object in DB by string
router.delete("/", checkAuth, async (req, res) => {
    try {
        const key = req.body.key;
        const toDelete = await membersDB.delete(key);
        res.status(200).json(toDelete);
    } catch {
        res.status(503).json({ error: "Database Error" });
    }
});

module.exports = router;
