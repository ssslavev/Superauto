/* globals __dirname */
// const connectionString = "mongodb://nodejsteame:teamenode2016@ds042459.mlab.com:42459/autotrade",
const connectionString = 'mongodb://nodejs2017:nodejs2017@ds149132.mlab.com:49132/superauto';
const port = 3001;
// port = process.env.PORT,
// console.log(port);
const path = require('path');
const rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    // environment: process.env.NODE_ENV,
    connectionString: connectionString,
    port: port,
    rootPath: rootPath,
};