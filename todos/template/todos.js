define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['todos.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<table class=\"table table-striped table-dark\">\n	<thead>\n		<tr>\n			<th>Task</th>\n		</tr>\n		<tr>\n			<th>\n				<div class=\"input-group mb-3\">\n				  <input type=\"text\" class=\"form-control\">\n				  <div class=\"input-group-append\">\n				    <button class=\"btn btn-outline-secondary addTask\" type=\"button\">Add</button>\n				  </div>\n				</div>\n			</th>\n		</tr>\n	</thead>\n	<tbody id=\"todoList\"></tbody>\n</table>";
},"useData":true});
});