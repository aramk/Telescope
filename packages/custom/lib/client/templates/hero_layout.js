// Custom layout template for full width hero
Template.hero_layout.replaces('layout');
var TemplateClass = Template.layout;

TemplateClass.helpers({
  showHero: function() {
    var heroRoutes = ['userReplies', 'userPosts'];
    var path = Iron.Location.get().path;
    var route = Router.current().route;
    var name = route && route.getName();
    return path === '/' || _.contains(heroRoutes, name);
  },
  isHomepage: function() {
    return Iron.Location.get().path === '/';
  },
  userClass: function() {
    return Meteor.user() ? 'has-user' : '';
  },
  user: function() {
    return Meteor.user();
  },
});

TemplateClass.events({
  'click .avatar': function() {
    var user = Meteor.user();
    var path = Router.path('user_profile', {
      _idOrSlug: user && user.telescope && user.telescope.slug
    });
    Router.go(path);
  }
});
