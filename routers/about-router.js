const express = require('express');
let Router = express.Router;

module.exports = function({ app, controller }) {
    let router = new Router();
    router.get("/about", controller.about)

    app.use(router);

    return router;
}