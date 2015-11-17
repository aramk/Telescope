class @PostMetrics extends DocMetrics

  constructor: ->
    @collection = Posts

  transform: (doc) ->
    result =
      postId: doc._id
      date: doc.createdAt
      category: doc.category
      message: doc.title
      backstory: doc.context
      userId: doc.userId
      url: Telescope.utils.getPostUrl(doc._id)
