module.exports = function(data) {
    return {
        getCreateAdvertsForm(req, res) {
            if (req.isAuthenticated()) {
                return res.render('adverts/create-advert', {
                    user: req.user,
                });
            }
            return res.redirect('/login');
        },

        createAdvert(req, res) {
            const advert = {
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
                author: req.user.username,
            };
            data.advertsData.create(advert)
                .then((adv) => {
                    res.status(201)
                        .redirect('/');
                });
        },

        getById(req, res) {
            const id = req.params.id;
            data.advertsData.getAdvertById(id)
                .then((advert) => {
                    return res.render('adverts/advert-details', {
                        advert: advert,
                        user: req.user,
                    });
                });
        },

        getAllAdverts(req, res) {
            data.advertsData.getAdvertsAll()
            .then((adverts) => {
                res.json(adverts);
            });
        },
    };
};
