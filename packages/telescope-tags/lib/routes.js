Categories.controllers = {};

Categories.controllers.page = RouteController.extend({
  data: function() {
    return {
      category: Categories.findOne(this.params._id)
    };
  },
  onAfterAction: function () {
    window.queueCategories = false;
  },
  fastRender: true


});

Meteor.startup(function () {
  // Categories

  Router.route('/category/:slug/:limit?', {
    name: 'posts_category',
    controller: Posts.controllers.category,
    onAfterAction: function() {
      this.slug = this.params.slug;
      Session.set('categorySlug', this.params.slug);
    }
  });

  // Categories Admin

  Router.route('/categories', {
    name: 'categories',
    template : "categories.html"
    controller: Categories.controllers.page,
  });

});



  // Router.onBeforeAction(Router._filters.isAdmin, {only: ['categories']});

  // Posts.controllers.category = Posts.controllers.list.extend({

  //   view: 'category',

  //   showViewsNav: false,

  //   onBeforeAction: function () {
  //     this.render('category_title', {to: 'postsListTop'});
  //     this.next();
  //   },

  //   data: function () {
  //     var terms = {
  //       view: "category",
  //       limit: this.params.limit || Settings.get('postsPerPage', 10),
  //       category: this.params.slug
  //     };

  //     // note: the post list controller template will handle all subscriptions, so we just need to pass in the terms
  //     return {
  //       terms: terms
  //     };
  //   },

  //   getCurrentCategory: function () {
  //     return Categories.findOne({slug: this.params.slug});
  //   },

  //   getTitle: function () {
  //     return this.getCurrentCategory().name;
  //   },

  //   getDescription: function () {
  //     return this.getCurrentCategory().description;
  //   }

  // });
