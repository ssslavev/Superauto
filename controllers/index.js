const fs = require("fs"),
    path = require("path");

module.exports = function(data) {
    let controllers = {};
    fs.readdirSync(__dirname)
        .filter(file => file.includes("-controller"))
        .forEach(file => {
            let modulePath = path.join(__dirname, file);
            let theModule = require(modulePath)(data);

            Object.keys(theModule)
                .forEach(key => {
                    controllers[key] = theModule[key];
                });
        });

    return controllers;
};