var TemplateClass = Template.comment_item;

TemplateClass.onCreated(function() {
  // Base score with user votes ignored.
  this.userBaseScore = this.data.baseScore;
  var user = Meteor.user();
  if (user) {
    if (_.contains(this.data.upvoters, user._id)) {
      this.userBaseScore -= getVotePower(user);
    } else if (_.contains(this.data.downvoters, user._id)) {
      this.userBaseScore += getVotePower(user);
    }
  }
});

TemplateClass.helpers({
  zeroBaseScore: function() {
    return Template.instance().userBaseScore === 0;
  },
  oneAbsBaseScore: function() {
    return Math.abs(Template.instance().userBaseScore) === 1;
  },
  scoreThumbClass: function() {
    return Template.instance().userBaseScore < 0 ? 'down' : 'up';
  },
  negativeBaseScore: function() {
    return Template.instance().userBaseScore < 0;
  }
});
