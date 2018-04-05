define(['handlebars.runtime'], function(Handlebars) {
  Handlebars = Handlebars["default"];  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
return templates['todo.hbs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Title</th>\n    </tr>\n  </thead>\n  <tbody>\n      <tr>\n        <td><a href=\"/\" onclick=\"return false;\" class=\"show-more\" id=\"title\">"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></td>\n      </tr>\n  </tbody>\n</table>";
},"useData":true});
});