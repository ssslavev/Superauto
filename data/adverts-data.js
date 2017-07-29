const mongodb = require('mongodb');
const Validate = require('./data-validator');
const validatorInst = new Validate();

module.exports = (data) => {
    function create(advert) {
        if (!validatorInst.validateAdvert(advert)) {
            return Promise.reject('Advert is in incorrect format');
        }
        const advertToCreate = {
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
            author: advert.author,
        };
        return data
            .then((db) => {
                return db;
            })
            .then((db) => {
                return db.collection('adverts').insert(advertToCreate);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getAllAdvertsByCategory(categoryName, limit) {
        return data
            .then((db) => {
                return db;
            })
            .then((db) => {
                return db.collection('adverts')
                    .find({ 'category': categoryName })
                    .sort({ _id: -1 }).limit(limit).toArray();
            });
    }

    function getAdvertById(id) {
        const oId = new mongodb.ObjectID(id);
        return data
            .then((db) => {
                return db;
            })
            .then((db) => {
                return db.collection('adverts').findOne({ '_id': oId });
            });
    }

    return {
        create,
        getAllAdvertsByCategory,
        getAdvertById,
    };
};
