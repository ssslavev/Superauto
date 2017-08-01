const mongodb = require('mongodb');
const CryptoJs = require('crypto-js');
const sha1 = CryptoJs.SHA1;

module.exports = (data) => {
    function create(user) {
        const Validate = require('./data-validator');
        const validatorInst = new Validate();
        if (!validatorInst.validateUser(user)) {
            return Promise.reject('User data is not in the correct format!');
        }
        const userToCreate = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: sha1(user.password).toString(),
        };


        return data
            .then((db) => {
                return db;
            })
            .then((db) => {
                return db.collection('users').insert(userToCreate);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function findByUsername(username) {
        return data
            .then((db) => {
                return db;
            })
            .then((db) => {
                return db.collection('users').find({ username: username });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getUserById(id) {
        const oId = new mongodb.ObjectID(id);

        return data
            .then((db) => {
                return db;
            })
            .then((db) => {
                return db.collection('users').findOne({ '_id': oId });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getAllUsernames() {
        return data
            .then((db) => {
                return db;
            })
            .then((db) => {
                return db.collection('users').find({}).toArray();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return {
        create,
        findByUsername,
        getUserById,
        getAllUsernames,
    };
};
