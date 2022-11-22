var express = require("express");
var router = express.Router();

router.get("/info", (req, res) => {
    res.status(200).send(
        "This route is reserved for everything related to team members."
    );
});

module.exports = router;
