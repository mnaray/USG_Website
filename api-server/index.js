const express = require("express");
const upload = require("express-fileupload");
const session = require("express-session");
const memoryStore = new session.MemoryStore();
const { Deta } = require("deta");
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
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false, // Cookies were a bad idea for CORS . . .
            sameSite: "none",
            secure: true,
            maxAge: 900000, // should be 15min (900'000ms) in prod
        },
        store: memoryStore, // session.MemoryStore() prevents memory leaks
    })
);

// routes
app.use("/members", require("./routes/members"));
app.use("/files", require("./routes/files"));
app.use("/auth", require("./routes/auth"));

// root
app.get("/", (req, res) => res.send("This is the API for usginfo.ch"));

// export 'app'
module.exports = app;
