// Custom layout template for full width hero
Template.hero_layout.replaces('layout');

Template.layout.helpers({
  isHomepage: function() {
    return Iron.Location.get().path === '/';
  },
  userClass: function() {
    return Meteor.user() ? 'has-user' : '';
  },
  user: function() {
    return Meteor.user();
  }
});
