'use strict';

angular.module('todoForm').component('todoForm', {
    templateUrl: 'todo-form/todo-form.template.html',
    controller: ['Todo', '$routeParams','$location',
        function TodoListController(Todo, $routeParams, $location) {
            Todo.getTodos();
            this.todo = Todo.getTodo($routeParams.todoId);
            if (!this.todo && $routeParams.todoId !== "create") {
                $location.url('/todos');
            }
            let self = this;
            this.saveTodo = function (todo) {
                todo = todo.status ? todo : Object.assign(todo, {status: 'Todo'});
                Todo.saveTodo(todo);
                $location.url('/todos');
            };
        }
    ]
});
