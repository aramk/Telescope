var TemplateClass = Template.postsLoadMore;

TemplateClass.helpers({
  isUserPosts: function() {
    return this.controllerInstance.terms.get().view === 'userPosts';
  },
  categoriesPage: function() {
    return this.controllerInstance.terms.get().view === 'categoryPosts';
  }
});

TemplateClass.events({
  'click .submit-message': function() {
    window.showPostModal();
  }
});
