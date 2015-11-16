Metrics =

  _metrics:
    posts: new PostMetrics()

  get: (name, args...) ->
    metrics = @_metrics[name]
    metrics.get.apply(metrics, args)

  getAll: (names, args...) ->
    names ?= _.keys(@_metrics)
    results = {}
    _.each names, (name) =>
      results[name] = @get(name, args...)
    results

  toExcel: (names, args...) ->
    results = @getAll(names, args...)
    console.log('results', results)
