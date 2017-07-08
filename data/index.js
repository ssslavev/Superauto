module.exports = function(db) {
    const usersData = require('./users-data')(db);

    return {
        usersData
    };
};