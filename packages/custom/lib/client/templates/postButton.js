Template.postButton.events({
  'click .post-button': function() {
    if (Meteor.user()) {
      Modal.show('submit_message_modal');
    } else {
      Messages.flash(i18n.t('you_must_be_logged_in'), 'error');
      console.log('not logged in');
      Router.go('atSignIn');
    }
  }
});