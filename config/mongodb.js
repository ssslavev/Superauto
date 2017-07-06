module.exports = function(callback) {

    let MongoClient = require('mongodb').MongoClient;
    const url = require('./constants').connectionString;
    MongoClient.connect(url, callback)
}