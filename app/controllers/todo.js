// Whole-script strict mode syntax
'use strict';

var Todo = require('../models/todo');



function findAll(req, res) {
    Todo.find({}, function (err, todos) {

        if (err) {
            res.send(err);
            return;
        }
        res.json(todos);

    });
}

exports.findList = function (req, res) {

    findAll(req, res);

};


exports.insertList = function (req, res) {
    // create a todo, information comes from AJAX request from Angular
    var todoText = {
        text: req.body.text
    }

    Todo.create(todoText, function (err) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        findAll(req, res);
    });
};

exports.deleteList = function (req, res) {

    var todo_id = {
        _id: req.params.todo_id
    }
    
    Todo.remove(todo_id, function (err) {
        if (err)
            res.send(err);

        // get and return all the todos after you create another
        findAll(req, res);
    });
};