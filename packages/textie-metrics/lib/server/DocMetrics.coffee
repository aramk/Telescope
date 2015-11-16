class @DocMetrics

  transform: (doc) -> doc

  get: (selector, options) ->
    selector ?= {}
    options = _.extend
      sort: createdAt: -1
    , options
    docs = @collection.find(selector, options).fetch()
    _.map docs, @transform.bind(@)
