# Additional fields for mizzao:user-status.
schema = new SimpleSchema
  'telescope.postsViewCount':
    type: Number
    optional: true

Users.attachSchema(schema)

# Keep record of post views by users.
Posts.after.update (userId, doc, fieldNames) ->
  return unless _.contains(fieldNames, 'viewCount')
  diff = (doc.viewCount ? 0) - (@previous.viewCount ? 0)
  user = Meteor.users.findOne(_id: userId)
  return unless user
  postsViewCount = user.telescope.postsViewCount
  valueSet = {'telescope.postsViewCount': diff}
  modifier = if postsViewCount? then {$inc: valueSet} else {$set: valueSet}
  Meteor.users.update userId, modifier
