Template.textie_comments_list.helpers({
  commentsCursor: function () {
    if (this.commentsCursor) { // not sure why this should ever be undefined, but it can apparently
      var comments = this.commentsCursor.map(function (comment, index) {
        comment.rank = index;
        return comment;
      });
      return comments;
    } else {
      console.log('commentsCursor not defined');
    }
  },
  post: function() {
    return Posts.findOne(this.postId);
  },
  downvotes: function() {
    if (this.baseScore < 0) {
      return this.downvotes;
    }
  }
});

Template.textie_comments_list.events({
  'click .more-button': function (event) {
    event.preventDefault();
    if (this.controllerInstance) {
      // controller is a template
      this.loadMoreHandler(this.controllerInstance);
    } else {
      // controller is router
      this.loadMoreHandler();
    }
  }
});
