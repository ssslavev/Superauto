module.exports = function(data) {
    return {
        getRegisterForm(req, res) {
            return res.render('users/register');
        },

        getAllUsernames(req, res) {
            return data.usersData.getAllUsernames()
                .then((usernames) => {
                    const responseUsernames = usernames.map((u) => u.username);
                    res.json(responseUsernames);
                });
        },
    };
};
