var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("This is the members route");
});

module.exports = router;
