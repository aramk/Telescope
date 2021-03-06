Categories = new Mongo.Collection("categories");

// category schema
Categories.schema = new SimpleSchema({
  _id: {
    type: String,
    optional: true
  },
  name: {
    type: String
  },
  order: {
    type: Number,
  },
  createdAt: {
    type: Date,
    optional: true
  },
});


Categories.schema.internationalize();

Categories.attachSchema(Categories.schema);

// Categories.before.insert(function (userId, doc) {
//   // if no slug has been provided, generate one
//   if (!doc.slug)
//     doc.slug = Telescope.utils.slugify(doc.name);
// });

// // category post list parameters
// Posts.views.add("category", function (terms) {
//   var categoryId = Categories.findOne({slug: terms.category})._id;
//   return {
//     find: {'categories': {$in: [categoryId]}} ,
//     options: {sort: {sticky: -1, score: -1}} // for now categories views default to the "top" view
//   };
// });

Meteor.startup(function () {
  Categories.allow({
    insert: Users.is.adminById,
    update: Users.is.adminById,
    remove: Users.is.adminById
  });
});

// getPostCategories = function (post) {
//   return !!post.categories ? Categories.find({_id: {$in: post.categories}}).fetch() : [];
// };

// getCategoryUrl = function(slug){
//   return Telescope.utils.getSiteUrl()+'category/'+slug;
// };

// // add callback that adds categories CSS classes
// function addCategoryClass (post, postClass){
//   var classArray = _.map(getPostCategories(post), function (category){return "category-"+category.slug;});
//   return postClass + " " + classArray.join(' ');
// }
// Telescope.callbacks.add("postClass", addCategoryClass);
