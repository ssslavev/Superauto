const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/user-adverts', controller.userAdverts);

    app.use(router);

    return router;
};
