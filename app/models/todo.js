// Database
// Whole-script strict mode syntax

'use strict';

var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

var collectionName = 'todoList';

var Schema = mongoose.Schema;


// Define Schema for mongodb
var TodoSchema = new Schema({
    text: {
        type: String
    }
});


// Export the module

module.exports = mongoose.model('TodoList', TodoSchema, collectionName);