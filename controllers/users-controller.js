module.exports = function() {
    return {
        getRegisterForm(req, res) {
            return res.render('users/register');
        },
    };
};
