const express = require('express');
const passport = require('passport');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.post('/register', controller.register)
        .post('/login',
            passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: true,
            }))
        .get('/logout', controller.logout);

    app.use(router);

    return router;
};
