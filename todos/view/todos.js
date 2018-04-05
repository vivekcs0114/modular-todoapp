define([
	'jquery',
	'backbone',
	'underscore',
	'handlebars',
	'text!todos/template/todos.hbs',
	'MyTodoList/view/todoList',
	'MyTodoList/model/todo',
	'MyTodoList/collection/todos',
	'MyTodoList/view/todo',
], function($, Backbone, _, Handlebars, TodosTemplate, TodoListView, TodoModel, TodoCollection, TodoView) {
	var todosView = Backbone.View.extend({

		el: $('#todoheader'),

		template: Handlebars.compile(TodosTemplate),

		initialize: function() {
			this.render();
		},

		events: {
			'click .addTask':'addTask'
		},
		
		addTask: function() {
			this.todos = new TodoCollection();
			var taskTitle = $('#taskInput').val();
			var todoModel = new TodoModel({task:taskTitle, status:false});
			var todoView = new TodoView({model:todoModel});
			$('#todoList').append(todoView.el);
			$('#taskInput').val("");
			this.todos.add(todoModel);
			console.log(this.todos);
		},

		render: function() {
			this.$el.html(this.template);
			var todoListView = new TodoListView();
		}

	});

	return todosView;
});