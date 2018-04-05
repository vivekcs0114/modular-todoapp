define([
	'backbone'
],function(Backbone) {
	var DetailModel = Backbone.Model.extend({
		defaults: {
			description:"Empty description"
		}
	});
	return DetailModel;
});