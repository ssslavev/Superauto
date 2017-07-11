const express = require('express');
let Router = express.Router;

module.exports = function({ app, controller }) {
    let router = new Router();
    router.get('/advert', controller.getCreateAdvertsForm)
        .post('/advert', controller.createAdvert)


    app.use(router);

    return router;
}