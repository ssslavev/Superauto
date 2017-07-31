module.exports = function(db) {
    const usersData = require('./users-data')(db);
    const advertsData = require('./adverts-data')(db);
    const commentsData = require('./comments-data')(db);

    return {
        usersData,
        advertsData,
        commentsData,
    };
};