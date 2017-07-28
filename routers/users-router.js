const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/register', controller.getRegisterForm)
        .get('/login', (req, res) => {
            res.render('users/login');
        });

    app.use(router);

    return router;
};
