const express = require("express");
// const { Deta } = require("deta");

// express
const app = express();
app.use(express.json()); // !!| ESSENTIAL FOR req |!!
app.disable("etag"); // disables automatic caching

app.get("/", (req, res) => res.send("This is the API for usginfo.ch"));

// export 'app'
module.exports = app;
