define([
	'jquery',
	'backbone',
	'underscore',
	'handlebars',
	'MyTodoDetails/model/detail',
	'MyTodoDetails/view/detail',
	'text!MyTodoList/template/todo.hbs'
], function($, Backbone, _, Handlebars, DetailModel, DetailView, TodoTemplate) {

	var todoView = Backbone.View.extend({

		template: Handlebars.compile(TodoTemplate),

		className:'todo-list',

		initialize: function() {
			this.render();
		},

		events: {
			'click .show-more':'showMore',
			'click #deleteTask':'deleteTask'
		},

		showMore: function() {
			console.log(this.model)
			$('#todoDetail').html("");
			var detailView = new DetailView({model:this.model});
			$('#todoDetail').append(detailView.el);
			$('.updateLabel').hide();
			$(".task-update").prop("disabled", true);
			$(".status-update").prop("disabled", true);
		},

		deleteTask: function() {
			this.model.destroy();
			console.log($('#todoDetail').html(""));
			console.log(todoView);
			console.log(this.model.cid);
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}

	});

	return todoView;
});