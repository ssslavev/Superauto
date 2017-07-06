let mongodb = require('mongodb');

module.exports = (connection) => {
    function create(user) {

        let userToCreate = {
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password

        }

        return new Promise((resolve, reject) => {
            connection((err, db) => {
                db.collection('users').save(userToCreate, (err, users) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(users);
                })
            })
        })

    }

    function findByUsername(username) {

        return new Promise((resolve, reject) => {
            connection((err, db) => {
                db.collection('users').find({ username }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                })
            })
        })
    }

    function getUserById(id) {
        let o_id = new mongodb.ObjectID(id);

        return new Promise((resolve, reject) => {
            connection((err, db) => {
                db.collection('users').findOne({ "_id": o_id }, (err, user) => {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(user);
                })
            })
        });
    }

    return {
        create,
        findByUsername,
        getUserById
    };
}