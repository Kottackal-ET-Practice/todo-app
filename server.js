// Server File
'use strict';

// Acquiring Modules

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var morgan = require('morgan');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var config = require('./server-config');


app.use(express.static(__dirname + config.directoryToServe));

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    'extended': 'true'
}));

app.use(bodyParser.json());

app.use(bodyParser.json({
    type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json


app.use(methodOverride());


// Send request to the routes
var api = require('./app/routes/router')(app, express);

// Append the /api in front of all routes 
app.use('/api', api);


// application -------------------------------------------------------------
app.get('/', function (req, res) {
    res.sendFile('./public/index.html'); 
});
// Connection 

// Database Conncetion
mongoose.connect(config.database + config.databaseName, function (err) {
    if (err)
        throw err;
    else
        console.log('Database Connected');
});

// Express Server conncetion
var server = app.listen(config.httpPort, config.host, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server running at http://%s:%s', host, port);
});