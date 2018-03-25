'use strict';

angular.module('core.todo').factory('Todo', ['$resource',
    function ($resource) {
        let self = this;
        this.todos = [];
        this.nextId = 6;
        let FileTodoResource = $resource('todos/todos.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
        return {
            getTodos: function () {
                if (self.todos.length > 0) {
                    return self.todos;
                } else {
                    self.todos = FileTodoResource.query();
                    return self.todos;
                }
            },
            getTodo: function (id) {
                return self.todos.find(todo => todo.id == id);
            },
            saveTodo: function (todo) {
                if (!todo.id) {
                    todo.created = new Date().getTime();
                    todo.id = self.nextId++;
                    self.todos = [...self.todos, todo];
                } else {
                    self.todos = self.todos.map(existingTodo => existingTodo.id == todo.id ?
                        Object.assign(existingTodo, todo) : existingTodo);
                }
            },
            completeTodo: function completeTodo(id) {
                self.todos = self.todos.map(todo => todo.id === id ? Object.assign(todo, {status: 'Completed'}) : todo);
                return self.todos;
            },
            restartTodo: function restartTodo(id) {
                self.todos = self.todos.map(todo => todo.id === id ? Object.assign(todo, {status: 'Todo'}) : todo);
                return self.todos;
            }
        }
    }
]);
