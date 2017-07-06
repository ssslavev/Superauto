module.exports = function() {
    return {
        home(req, res) {

            return res.render("home/home", {
                user: req.user
            });
        }
    };
};