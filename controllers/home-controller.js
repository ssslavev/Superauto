module.exports = function(data) {
    return {
        home(req, res) {
            Promise.all([data.advertsData.getAllAdvertsByCategory('car', 3),
                    data.advertsData.getAllAdvertsByCategory('truck', 3),
                    data.advertsData.getAllAdvertsByCategory('motorcycle', 3)
                ])
                .then(([reqCars, reqTrucks, reqMotors]) => {

                    return res.render("home/home", {
                        user: req.user,
                        cars: reqCars,
                        trucks: reqTrucks,
                        motorcycles: reqMotors
                    });
                })

        }
    };
};