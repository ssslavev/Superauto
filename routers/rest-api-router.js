const express = require('express');
const Router = express.Router;

module.exports = function({ app, controller }) {
    const router = new Router();
<<<<<<< HEAD
    router.get('/usernames', controller.getAllUsernames)
        .post('/advert/createComment', controller.createMessage);
=======
    router.get('/usernames', controller.getAllUsernames);
    router.get('/all-adverts', controller.getAllAdverts);
>>>>>>> f32517804cd76f8a9ca053e73b4dd47265b7ee7c

    app.use('/api', router);

    return router;
};
