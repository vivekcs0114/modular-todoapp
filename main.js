require.config({
	paths:{
		jquery:'../node_modules/jquery/dist/jquery.min',
		underscore:'../node_modules/underscore/underscore-min',
		backbone:'../node_modules/backbone/backbone-min',
		text:'../node_modules/requirejs-text/text',
		bootstrap:'../node_modules/bootstrap/dist/js/bootstrap.min',
		handlebars:'../node_modules/handlebars/dist/handlebars.min'
	}
});

require([
	'todos/view/todos'
], function(TodosView) {
	var todosView = new TodosView();
});