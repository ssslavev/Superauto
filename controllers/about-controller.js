module.exports = function() {
    return {
        about(req, res) {
            return res.render('about', {
                user: req.user,
            });
        },
    };
};
