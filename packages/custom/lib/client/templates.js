// Override "post_title" template
//Template.custom_post_title.replaces("post_title");

// TODO(aramk) Use this instead after updating Telescope.
// Telescope.config.addCustomPrefix('textie_');

var prefix = 'textie_';
var templateNames = ['nav', 'user_menu'];
_.each(templateNames, function(name) {
  Template[prefix + name].replaces(name);
});
