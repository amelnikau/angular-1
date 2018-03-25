'use strict';

angular.module('todoApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/todos', {
            template: '<todo-list></todo-list>'
        }).when('/todos/:todoId', {
            template: '<todo-form></todo-form>'
        }).when('/todos/create', {
            template: '<todo-from></todo-from>'
        }).otherwise('/todos');
    }
]);
