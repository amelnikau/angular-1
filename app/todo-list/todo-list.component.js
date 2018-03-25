'use strict';

angular.module('todoList').component('todoList', {
    templateUrl: 'todo-list/todo-list.template.html',
    controller: ['Todo', '$location',
        function TodoListController(Todo, $location) {
            this.todos = Todo.getTodos();
            this.orderProp = 'description';
            let self = this;
            this.restartTodo = function (id) {
                self.todos = Todo.restartTodo(id);
            };
            this.completeTodo = function (id) {
                self.todos = Todo.completeTodo(id);
            };
            this.addTodo = function () {
                $location.url('/todos/create');
            }
        }
    ]
});
