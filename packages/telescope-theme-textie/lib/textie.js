Telescope.theme.settings.useDropdowns = true; // not strictly needed since "true" is the current default

if (Meteor.isClient) {
  // TODO(aramk) Use this instead after updating Telescope.
  // Telescope.config.addCustomPrefix('textie_');
  
  var prefix = 'textie_';
  var templateNames = ['nav', 'user_menu'];
  _.each(templateNames, function(name) {
    Template[prefix + name].replaces(name);
  });
}
