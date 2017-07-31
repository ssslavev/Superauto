/* globals __dirname */

const fs = require('fs');
const path = require('path');

module.exports = function(data) {
    const controllers = {};
    fs.readdirSync(__dirname)
        .filter((file) => file.includes('-controller'))
        .forEach((file) => {
            const modulePath = path.join(__dirname, file);
            const theModule = require(modulePath)(data);

            Object.keys(theModule)
                .forEach((key) => {
                    controllers[key] = theModule[key];
                });
        });

    return controllers;
};