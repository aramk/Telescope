Template.trending_posts.helpers({

  posts: function () {
    return getPosts();
  },
  hasPosts: function() {
    return getPosts().count() > 0;
  }

});

function getPosts() {
  return Posts.find({awesomeMessage:true}, {limit: 6, sort: {postedAt: -1}});
}
