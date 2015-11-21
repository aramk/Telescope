var TemplateClass = Template.comment_item;

TemplateClass.helpers({
  zeroBaseScore: function() {
    return this.baseScore === 0;
  },
  oneAbsBaseScore: function() {
    return Math.abs(this.baseScore) === 1;
  },
  scoreThumbClass: function() {
    return this.baseScore < 0 ? 'down' : 'up';
  },
  negativeBaseScore: function() {
    return this.baseScore < 0;
  }
});
