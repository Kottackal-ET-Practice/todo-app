// Whole-script strict mode syntax
'use strict';

// Load user Modules

var todo = require('../controllers/todo');


// API
module.exports = function (app, express) {

    // Create route handlers
    var api = express.Router();

    api.route('/todos')
        // get all todos
        .get(function (req, res) {
            todo.findList(req, res);
        })
        // Insert a todo
        .post(function (req, res) {
            todo.insertList(req, res);
        });



    // delete a todo
    api.route('/todos/:todo_id')
        // Create insurance and store in Database
        .delete(function (req, res) {
            todo.deleteList(req, res);
        });



    return api;
};