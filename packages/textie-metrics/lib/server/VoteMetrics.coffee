class @VoteMetrics extends DocMetrics

  constructor: ->
    @collection = Users

  transform: (doc) ->
    upvotedComments = doc.telescope.upvotedComments
    downvotedComments = doc.telescope.downvotedComments
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
