define([
	'backbone',
	'MyTodoList/model/todo'
],function(Backbone, TodoModel) {

	var TodoCollection = Backbone.Collection.extend({

		initialize : function() {
			this.on('add', function(model) {
				console.log("collection is initialized");
			});
		},

		model: TodoModel,
		url:'../data/todos.json',
		parse: function(data) {
			return data.results;
		}
	});
	return TodoCollection;
});