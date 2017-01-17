// Configuration file for the application

'use strict';

module.exports = {
    "httpPort": process.env.PORT || 9000,
    "host": "127.0.0.1",
    "directoryToServe": "/public",
    "database": "mongodb://localhost/",
    "databaseName": "todoApp"
}