const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/usernames', controller.getAllUsernames);
    router.get('/all-adverts', controller.getAllAdverts);

    app.use('/api', router);

    return router;
};
