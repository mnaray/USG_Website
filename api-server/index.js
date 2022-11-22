const express = require("express");
const upload = require("express-fileupload");
const { Deta } = require("deta");
const cors = require("cors");

// express
const app = express();
app.use(express.json()); // !!| ESSENTIAL FOR req |!!
app.use(cors()); // Cors
app.disable("etag"); // disables automatic caching

// routes
app.use("/members", require("./routes/members"));

// root
app.get("/", (req, res) => res.send("This is the API for usginfo.ch"));

// export 'app'
module.exports = app;
