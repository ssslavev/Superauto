module.exports = function(db) {
    const usersData = require('./users-data')(db);
    const advertsData = require('./adverts-data')(db);

    return {
        usersData,
        advertsData,
    };
};
