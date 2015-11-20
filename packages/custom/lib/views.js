Posts.views.add('categoryPosts', function (terms) {
  return {
    find: {category: terms.postCategory},
    options: {limit: 10, sort: {postedAt: -1}}
  };
});
