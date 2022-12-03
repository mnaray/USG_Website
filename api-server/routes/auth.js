const express = require("express");
const { Deta } = require("deta");
const router = express.Router();

// deta
const deta = Deta();
const memberImages = deta.Drive("member_images");

// info about this route
router.get("/info", (req, res) => {
    res.status(200).send(
        "This route is reserved for everything related to authentication."
    );
});
