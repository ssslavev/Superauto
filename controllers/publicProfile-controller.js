module.exports = function(data) {
    return {
        getUserById(req, res) {
            const id = req.params.id;
            data.usersData.getUserById(id)
                .then((user) => {
                    return res.render('users/publicProfile', {
                        user: user,
                    });
                });
        },
    };
};
