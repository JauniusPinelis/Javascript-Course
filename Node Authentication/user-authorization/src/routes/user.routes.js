const { allAccess, userAccess, moderatorAccess, adminAccess }
    = require('../controllers/user.controller');

module.exports = function (app) {

    app.get("/api/test/all", allAccess);

    app.get("/api/test/user", userAccess);

    app.get("/api/test/mod", moderatorAccess);

    app.get("/api/test/admin", adminAccess);
}