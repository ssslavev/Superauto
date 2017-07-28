module.exports = function() {
    return {
        services(req, res) {
            return res.render('services/services');
        },
    };
};
