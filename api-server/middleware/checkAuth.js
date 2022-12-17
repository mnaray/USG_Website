const jwt = require("jsonwebtoken");
const { Deta } = require("deta");

exports.checkAuth = async function checkAuth(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const jwtData = jwt.verify(token, process.env.SESSION_SECRET);

        // deta
        const deta = Deta();
        const loginDB = deta.Base("login");

        // check if user exists
        const existing = await loginDB.get(jwtData.username);
        if (existing === null) throw new Error();

        // continue processing the request if authorized
        next();
    } catch (err) {
        res.json({ error: err.message });
    }
};
