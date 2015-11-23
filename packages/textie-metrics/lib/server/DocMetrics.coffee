class @DocMetrics

  transform: (doc) -> doc

  get: (selector, options) ->
    selector ?= {}
    options = _.extend
      sort: createdAt: -1
    , options
    docs = @collection.find(selector, options).fetch()
    metrics = _.map docs, @transform.bind(@)
    _.compact _.flatten metrics
