const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
    router.get('/advert', controller.getCreateAdvertsForm)
        .post('/advert', controller.createAdvert)
        .get('/advert/:id', controller.getById);


    app.use(router);

    return router;
};
