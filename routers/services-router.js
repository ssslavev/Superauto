const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/services', controller.services);

    app.use(router);

    return router;
};
