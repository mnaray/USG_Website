const express = require("express");
const upload = require("express-fileupload");
const { Deta } = require("deta");

// deta
const deta = Deta();
const peopleDB = deta.Base("people");
const imageFiles = deta.Drive("images");

// express
const app = express();
app.use(express.json()); // !!| ESSENTIAL FOR req |!!
app.disable("etag"); // disables automatic caching

app.get("/", (req, res) => res.send("This is the API for usginfo.ch"));

// export 'app'
module.exports = app;
