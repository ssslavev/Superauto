const mongodb = require('mongodb');

module.exports = (data) => {
    function create(comment) {
        const commentToAdd = {
            author: comment.author,
            text: comment.text,
        };

        const oId = new mongodb.ObjectID(comment.id);


        return data
            .then((db) => {
                return db;
            })
            .then((db) => {
                return db.collection('adverts')
                .update({ '_id': oId },
                    { $addToSet: { comments: commentToAdd } });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return {
        create,
    };
};
