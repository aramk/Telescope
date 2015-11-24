Template.textie_nav.events({
  'click .avatar': function (event) {
    var user = Meteor.user();
    var path = Router.path('user_profile', {
      _idOrSlug: user && user.telescope && user.telescope.slug
    });
    Router.go(path);
  }
});
