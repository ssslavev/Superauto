module.exports = function(db) {
    const usersData = require('./users-data')(db),
        advertsData = require('./adverts-data')(db);

    return {
        usersData,
        advertsData
    };
};