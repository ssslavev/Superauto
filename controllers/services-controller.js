const services = () => {
    return {
        services(req, res) {
            return res.render('services/services.pug', {
                user: req.user });
        },
    };
};

module.exports = services;
