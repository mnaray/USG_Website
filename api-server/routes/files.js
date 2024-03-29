const express = require("express");
const { Deta } = require("deta");
const router = express.Router();
const { checkAuth } = require("../middleware/checkAuth");

// deta
const deta = Deta(process.env.DB_DATA_KEY);
const memberImages = deta.Drive("member_images");

// info about this route
router.get("/info", (req, res) => {
    res.status(200).send(
        "This route is reserved for everything related to files."
    );
});

// upload content of post req to fileserver
router.post("/upload", checkAuth, async (req, res) => {
    try {
        const fileName = req.body.file.name;
        const fileContents = req.body.file.buffer.data;
        const buffer = Buffer.from(new Uint8Array(fileContents));
        const img = await memberImages.put(fileName, { data: buffer });
        res.status(201).json({ success: true, fileName: fileName });
    } catch (err) {
        res.status(400).json({
            error: "Bad Request or ran out of diskspace.",
            msg: err.message,
            reqContents: req.body,
        });
    }
});

// download file with specific name
// responds with an Array of Uint8
router.get("/download/:name", async (req, res) => {
    try {
        const name = req.params.name;
        const list = await memberImages.list();
        if (!list.names.includes(name)) {
            res.status(404).json({ error: "No file found with name " + name });
            return;
        }
        const img = await memberImages.get(name);
        const buffer = await img.arrayBuffer();
        res.json(Buffer.from(buffer)); // MUST BE JSON!
    } catch (error) {
        res.status(500).json({ error: "Fileserver Error" });
    }
});

// delete file with specific name
router.delete("/delete", checkAuth, async (req, res) => {
    try {
        const name = req.body.name;
        const list = await memberImages.list();
        if (!list.names.includes(name)) {
            res.status(404).json({ error: "No file found with name " + name });
            return;
        }
        const toDelete = await memberImages.delete(name);
        res.status(200).json({ deleted: toDelete });
    } catch (error) {
        res.status(500).json({ error: "Fileserver Error" });
    }
});

module.exports = router;
