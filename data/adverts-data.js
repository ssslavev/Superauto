let mongodb = require('mongodb');

module.exports = (db) => {
    function create(advert) {

        let advertToCreate = {
            title: advert.title,
            price: advert.price,
            category: advert.category,
            manufacturer: advert.manufacturer,
            engine: advert.engine,
            transmission: advert.transmission,
            year: advert.year,
            color: advert.color,
            region: advert.region,
            description: advert.description,
            picture: advert.picture,
            userId: advert.userId,
            author: advert.author

        }


        return db.then((db) => { return db })
            .then((db) => {
                return db.collection('adverts').insert(advertToCreate);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    function getAllAdvertsByCategory(categoryName, limit) {
        return db.then((db) => { return db })
            .then((db) => {
                return db.collection('adverts').find({ 'category': categoryName }).sort({ _id: -1 }).limit(limit).toArray();
            })
    }

    function getAdvertById(id) {
        let o_id = new mongodb.ObjectID(id);
        return db.then((db) => { return db })
            .then((db) => {
                return db.collection('adverts').findOne({ '_id': o_id })
            })
    }

    return {
        create,
        getAllAdvertsByCategory,
        getAdvertById

    };
}