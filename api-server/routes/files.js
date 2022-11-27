const express = require("express");
const { Deta } = require("deta");
const router = express.Router();

// deta
const deta = Deta();
const memberImages = deta.Drive("member_images");

// info about this route
router.get("/info", (req, res) => {
    res.status(200).send(
        "This route is reserved for everything related to files."
    );
});

// send upload forms to client
router.get("/upload", (req, res) => {
    res.send(`
    <form action="/files/upload" enctype="multipart/form-data" method="post">
      <input type="file" name="file">
      <input type="submit" value="Upload">
    </form>`);
});

// upload content of post req to fileserver
router.post("/upload", async (req, res) => {
    try {
        const fileName = req.files.file.name;
        const fileContents = req.files.file.data;
        const img = await memberImages.put(fileName, { data: fileContents });
        res.status(201).send(
            "Successfully uploaded " + img + " to the Fileserver!"
        );
    } catch (error) {
        res.status(400).json({ error: "Bad Request or ran out of diskspace." });
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
        }
        const img = await memberImages.get(name);
        const buffer = await img.arrayBuffer();
        res.json(Buffer.from(buffer)); // MUST BE JSON!
    } catch (error) {
        res.status(500).json({ error: "Fileserver Error" });
    }
});

// delete file with specific name
router.delete("/delete", async (req, res) => {
    try {
        const name = req.body.name;
        const list = await memberImages.list();
        if (!list.names.includes(name)) {
            res.status(404).json({ error: "No file found with name " + name });
        }
        const toDelete = await memberImages.delete(name);
        res.status(200).json({ deleted: toDelete });
    } catch (error) {
        res.status(500).json({ error: "Fileserver Error" });
    }
});

module.exports = router;
