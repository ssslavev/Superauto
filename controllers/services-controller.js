const services = () => {
    return {
        services(req, res) {
            return res.render('services/services', {
                user: req.user });
        },
    };
};

module.exports = services;
