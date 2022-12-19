const express = require("express");
const upload = require("express-fileupload");
const cors = require("cors");

// express
const app = express();
app.use(express.json()); // !!| ESSENTIAL FOR req |!!
app.use(
    cors({
        // credentials: true,
        // origin: ["http://localhost:3000", "https://usginfo.ch"],
    })
); // Cors
app.use(upload()); // Fileupload
app.disable("etag"); // disables automatic caching

// routes
app.use("/members", require("./routes/members"));
app.use("/files", require("./routes/files"));
app.use("/auth", require("./routes/auth"));

// root
app.get("/", (req, res) => res.send("This is the API for usginfo.ch"));

// export 'app'
module.exports = app;
