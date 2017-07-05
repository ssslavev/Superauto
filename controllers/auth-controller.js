module.exports = function() {
    return {
        register(req, res) {

            let user = {
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            }


        }
    };
};