module.exports = function(data) {
    return {
        getCreateAdvertsForm(req, res) {
            if (req.isAuthenticated()) {
                return res.render("adverts/create-advert", {
                    user: req.user
                });
            } else {
                res.redirect("/login");
            }
        },

        createAdvert(req, res) {

            let advert = {
                title: req.body.title,
                price: req.body.price,
                category: req.body.category,
                manufacturer: req.body.manufacturer,
                engine: req.body.engine,
                transmission: req.body.transmission,
                year: req.body.year,
                color: req.body.color,
                region: req.body.region,
                description: req.body.description,
                picture: req.body.picture,
                userId: req.user._id,
                author: req.user.username
            }

            data.advertsData.create(advert)
                .then((advert) => {
                    res.status(201)
                        .redirect('/')
                })
        },
    };
};