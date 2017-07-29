const profile = () => {
    return {
        profile(req, res) {
            if (req.isAuthenticated()) {
                return res.render('users/profile', {
                    user: req.user,
                });
            }
            return res.redirect('/login');
        },
    };
};

module.exports = profile;
