module.exports = function(data) {
    return {
        register(req, res) {
            const user = {
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            };

            data.usersData.create(user)
                .then((u) => {
                    res.status(201)
                        .redirect('/');
                });
        },

        logout(req, res) {
            req.logout();
            res.redirect('/');
        },
    };
};