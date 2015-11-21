Meteor.startup(function () {

  Router.route('/privacy', {
    name: 'privacy',
    template: 'privacyPolicy'
  });

  Router.route('/user/replies', {
    name: 'userReplies',
    template: 'user_comments'
  });

  Router.route('/user/posts', {
    name: 'userPosts',
    template: 'user_posts'
  });

  Router.route('/post-categories', {
    name: 'postCategories',
    template: 'textie_categories'
  });

});
