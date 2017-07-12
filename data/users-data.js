let mongodb = require('mongodb'),
    CryptoJs = require('crypto-js');


module.exports = (db) => {
    function create(user) {

        let userToCreate = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: CryptoJs.SHA1(user.password).toString()

        }


        return db.then((db) => { return db })
            .then((db) => {
                return db.collection('users').insert(userToCreate);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    function findByUsername(username) {

        return db.then((db) => { return db })
            .then((db) => {
                return db.collection('users').find({ username: username });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    function getUserById(id) {
        let o_id = new mongodb.ObjectID(id);

        return db.then((db) => { return db })
            .then((db) => {
                return db.collection('users').findOne({ "_id": o_id });
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return {
        create,
        findByUsername,
        getUserById
    };
}