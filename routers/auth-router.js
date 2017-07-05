const express = require('express');
let Router = express.Router;

module.exports = function({ app, controller }) {
    let router = new Router();
    router.post("/register", controller.register)

    app.use(router);

    return router;
}