var TemplateClass = Template.comment_item;

TemplateClass.helpers({
  isTopComment: function() {
    return this.first && this.upvotes > 1;
  },
  points: function() {
    // Upvotes are displayed by default, but this will display the overall score
    // (upvotes - downvotes).
    return this.baseScore;
  }
});
