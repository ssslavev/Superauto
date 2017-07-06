const express = require('express');
const passport = require('passport');
let Router = express.Router;

module.exports = function({ app, controller }) {
    let router = new Router();
    router.post("/register", controller.register)
        .post("/login",
            passport.authenticate('local', {
                successRedirect: '/',
                failureRedirect: '/login',
                failureFlash: true
            }));

    app.use(router);

    return router;
}