Template.user_comments.helpers({
  arguments: function () {
    var user = Meteor.user();
    return {
      template: "textie_comments_list",
      options: {
        currentUser: user
      },
      terms: {
        view: 'userComments',
        userId: user._id,
        limit: 5,
        enableCache: false,
        subscribeToUsers: false
      }
    };
  }
});