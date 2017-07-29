const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/user-profile', controller.profile);

    app.use(router);

    return router;
};
