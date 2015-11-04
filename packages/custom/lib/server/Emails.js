var EMAIL_FROM = 'noreply@textie.co';
var EMAIL_TO = 'textieforward@gmail.com';
var ROOT_URL = process.env.ROOT_URL;
var LETTER_START = 'A';

var fs = Npm.require('fs');
var path = Npm.require('path');
var assetsPath = path.join(process.cwd(), 'assets/packages/my-custom-package');

var notificationEmailTemplate = fs.readFileSync(path.join(assetsPath,
    'lib/server/emails/postNotificationEmail.html'), 'utf8');

_.extend(Posts, {

  /**
   * @param {String} id - A post ID.
   * @return {String} The URL for the given post.
   */
  getUrl: function(id) {
    return url.resolve(ROOT_URL, 'posts/' + id);
  },

  /**
   * Sends a notification email for the given post.
   * @param {String} id - A post ID.
   */
  sendNotificationEmail: function(id) {
    var doc = Posts.findOne(id);
    var compiled = _.template(notificationEmailTemplate);
    var html = compiled({code: Emails.getCode(doc.createdAt), url: Posts.getUrl(doc._id)});
    Email.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: 'textie | Response needed',
      html: html
    });
  }

});

Emails = {

  /**
   * @param {Date|String} date - A date object or string. If a string is used, it must contain the
   *     timezone offset (e.g. ISO format).
   * @return {String} A code representing the timezone for the date.
   */
  getCode: function(date) {
    if (!date) throw new Error('No date provided')

    var hour = moment.utc(date).hours();
    return String.fromCharCode(LETTER_START.charCodeAt(0) + hour) + '1';
  }

};

// Send an email notification to admins when new posts are created.
Posts.after.insert(function(userId, doc) {
  Posts.sendNotificationEmail(doc._id);
});
