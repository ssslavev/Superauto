module.exports = function(data) {
    return {
        createMessage(req, res) {
            const comment = {
                author: req.body.author,
                text: req.body.text,
                id: req.body.id,
            };


            return data.commentsData.create(comment);

        },
    };
};