const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/users/:id', controller.getUserById);

    app.use(router);

    return router;
};
