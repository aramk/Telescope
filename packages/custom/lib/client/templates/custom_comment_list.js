var TemplateClass = Template.comment_list;

TemplateClass.helpers({
  child_comments: function() {
    // Modified to sort by baseScore instead of upvotes.
    var post = this;
    var unmappedComments;
    var options = { sort: { baseScore: -1, postedAt: -1 } };
    if (post.isAdmin) {
      unmappedComments = Comments.find({ postId: post._id, parentCommentId: null, author: Meteor.user() }, options);
    }
    else {
      unmappedComments = Comments.find({ postId: post._id, parentCommentId: null }, options);
    }
    var comments = unmappedComments.map(function (comment, index) {
      if (index == 0) {
        comment.first = true;
      } else {
        comment.first = false;
      }
      return comment;
    });
    return comments;
  }
});
