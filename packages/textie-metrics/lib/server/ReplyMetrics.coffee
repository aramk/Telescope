class @ReplyMetrics extends DocMetrics

  constructor: ->
    @collection = Comments

  transform: (doc) ->
    result =
      replyId: doc._id
      message: doc.body
      postId: doc.postId
      userId: doc.userId
      upvotes: doc.upvotes
      downvotes: doc.downvotes
      date: doc.createdAt
      baseScore: doc.baseScore
