define([
	'jquery',
	'backbone',
	'MyTodoList/view/todo',
	'MyTodoList/model/todo',
	'MyTodoList/collection/todos',
	'handlebars',
	'text!MyTodoList/template/todo.hbs',
	'MyTodoDetails/model/detail',
	'MyTodoDetails/view/detail'
], function($, Backbone, TodoView, TodoModel, TodoCollection, Handlebars, TodoTemplate, DetailModel, DetailView) {

	var todoListView = Backbone.View.extend({

		model:TodoModel,

		el: $('#todoList'),

		initialize: function() {
			this.todos = new TodoCollection();
			this.todos.bind('all', this.render, this);
			this.todos.fetch();
		},

		render: function() {
			this.$el.html("");
			var self = this.el;
			this.todos.each(function(model) {
				var todoView = new TodoView({model:model});
				self.append(todoView.el);
			})
		}

	});
	return todoListView;
});