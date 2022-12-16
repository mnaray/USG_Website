exports.checkAuth = function checkAuth(req, res, next) {
    // if (!req.session.authenticated) {
    //     res.status(401).json({ error: "Not authorized!" });
    // } else {
    //     next();
    // }
    next();
};
