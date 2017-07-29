module.exports = (data) => {
    return {
        userAdverts(req, res) {
            if (req.isAuthenticated()) {
                return res.render('users/adverts', {
                    user: req.user });
            }
            return res.redirect('/login');
        },
    };
};
