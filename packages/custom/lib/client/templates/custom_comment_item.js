TemplateClass = Template.comment_item;

TemplateClass.helpers({
  isTopComment: function() {
    return this.first && this.upvotes > 1;
  }
});
