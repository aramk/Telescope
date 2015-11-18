class @VoteMetrics extends DocMetrics

  constructor: ->
    @collection = Users

  transform: (doc) ->
    upvotedComments = doc.telescope.upvotedComments
    downvotedComments = doc.telescope.downvotedComments
    return if _.isEmpty(upvotedComments) or _.isEmpty(downvotedComments)
    votes = []
    addVote = (item, direction) ->
      votes.push
        replyId: item.itemId
        userId: doc._id
        date: item.votedAt
        vote: direction
    _.each upvotedComments, (item) -> addVote(item, 1)
    _.each downvotedComments, (item) -> addVote(item, -1)
    votes
