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
    const fileName = req.files.file.name;
    const fileContents = req.files.file.data;
    const img = await memberImages.put(fileName, { data: fileContents });
    res.send(img);
});

// download file with specific name
// responds with an Array of Uint8
router.get("/download/:name", async (req, res) => {
    const name = req.params.name;
    const img = await memberImages.get(name);
    const buffer = await img.arrayBuffer();
    res.json(Buffer.from(buffer)); // MUST BE JSON!
});

module.exports = router;
