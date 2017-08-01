const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/', (req, res) => {
        res.redirect('/home');
    });
    router
        .get('/home', controller.home);

    app.use(router);

    return router;
};
