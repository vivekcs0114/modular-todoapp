define([
	'jquery',
	'backbone',
	'underscore',
	'handlebars',
	'text!MyTodoDetails/template/detail.hbs'
], function($, Backbone, _, Handlebars, DetailTemplate) {

	var detailView = Backbone.View.extend({

		template: Handlebars.compile(DetailTemplate),

		initialize: function() {
			this.render();
		},

		events: {
			'click #editTask':'editTask',
			'click #updateTask':'updateTask'
		},

		editTask: function() {
			$(".task-update").prop("disabled", false);
			$(".status-update").prop("disabled", false);
			$('.editLabel').hide();
			$('.updateLabel').show();						
		},

		updateTask: function() {
			this.task = $(".task-update").val();
			this.status = $(".status-update").val();
			this.model.set({task:this.task, status:this.status});
			console.log(this.model);
			$('.editLabel').show();
			$('.updateLabel').hide();
			$(".task-update").prop("disabled", true);
			$(".status-update").prop("disabled", true);
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		}

	});

	return detailView;
});