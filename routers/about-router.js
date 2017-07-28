const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/about', controller.about);

    app.use(router);

    return router;
};
