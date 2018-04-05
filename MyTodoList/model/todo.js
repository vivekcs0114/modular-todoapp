define([
	'backbone'
],function(Backbone) {
	var TodoModel = Backbone.Model.extend({
		defaults: {
			task:"Empty Todo",
			status:false
		}
	});
	return TodoModel;
});