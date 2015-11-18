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
    result =
      userId: doc._id
      joinDate: doc.createdAt
      joinType: joinType
      email: doc.emails?[0]?.address
      postCount: telescope.postCount
      replyCount: telescope.commentCount
      ipAddress: null
      pageViews: null
      lastOnline: null
