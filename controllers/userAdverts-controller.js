module.exports = (data) => {
    return {
        userAdverts(req, res) {
            if (!req.isAuthenticated()) {
                return res.redirect('/login');
            }
            return Promise
            .resolve(data.advertsData.getAdvertsByUser(req.user._id))
            .then((reqAdverts) => {
                console.log('boo');
                console.log(reqAdverts);
                return res.render('users/adverts', {
                    user: req.user,
                    adverts: reqAdverts,
                });
            })
            .catch((err) =>{
                return console.log(err);
            });
        },
    };
};
