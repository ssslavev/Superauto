module.exports = function(connection) {
    const usersData = require('./users-data')(connection);

    return {
        usersData
    };
};