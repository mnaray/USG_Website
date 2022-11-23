var express = require("express");
const { Deta } = require("deta");
var router = express.Router();

// deta
const deta = Deta();
const membersDB = deta.Base("members");
const memberImages = deta.Drive("memberImages");

router.get("/info", (req, res) => {
    res.status(200).send(
        "This route is reserved for everything related to team members."
    );
});

router.get("/", async (req, res) => {
    try {
        const members = await membersDB.fetch();
        res.status(200).json(members);
    } catch (error) {
        res.status(503).json({ error: "Database Error" });
    }
});

router.get("/:key", async (req, res) => {
    try {
        const key = req.params.key;
        const value = membersDB.get(key);
        if (value === null) {
            res.status(404).json({ error: "No value found at " + key });
        }
        res.status(200).json(value);
    } catch (error) {
        res.status(503).json({ error: "Databese Error" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, funktionIG, teamrolle, comment } = req.body;
        const toCreate = { name, funktionIG, teamrolle, comment };
        const toInsert = await membersDB.insert(toCreate);
        res.status(201).json(toInsert);
    } catch (error) {
        res.status(400).json({ error: "Bad Request" });
    }
});

router.put("/", async (req, res) => {
    try {
        const { key, name, funktionIG, teamrolle, comment } = req.body;
        const toAlter = await membersDB.put(
            key,
            name,
            funktionIG,
            teamrolle,
            comment
        );
        res.status(200).json(toAlter);
    } catch (error) {
        res.status(503).json({ error: "Databese Error" });
    }
});

module.exports = router;
