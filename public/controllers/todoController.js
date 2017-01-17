'use strict';

angular.module('todoApp')
    .controller('mainController', mainController);

function mainController($http) {

    var _this = this;

    _this.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/todos')
        .success(function (data) {
            _this.todos = data;
            console.log(_this.todos);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    _this.createTodo = function () {
        $http.post('/api/todos', _this.formData)
            .success(function (data) {
                _this.formData = {}; // clear the form so our user is ready to enter another
                _this.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    // delete a todo after checking it
    _this.deleteTodo = function (id) {
        $http.delete('/api/todos/' + id)
            .success(function (data) {
                _this.todos = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

}