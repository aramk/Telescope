class @UserMetrics extends DocMetrics

  constructor: ->
    @collection = Meteor.users

  transform: (doc) ->
    services = doc.services
    if services.facebook?
      joinType = 'facebook'
    else if !_.isEmpty('email')
      joinType = 'email'
    telescope = doc.telescope
    lastLogin = doc.status?.lastLogin
    result =
      userId: doc._id
      joinDate: doc.createdAt
      joinType: joinType
      username: doc.username
      email: doc.emails?[0]?.address
      postCount: telescope.postCount
      replyCount: telescope.commentCount
      postViews: telescope.postsViewCount
      ipAddress: lastLogin?.ipAddr
      lastOnline: lastLogin?.date
