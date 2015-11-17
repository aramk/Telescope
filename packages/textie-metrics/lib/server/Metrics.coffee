XLSX = Npm.require('xlsx')

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

    wb = new Workbook()
    _.each results, (metrics, metricId) ->
      headers = _.keys(_.first(metrics))
      data = if _.isEmpty(headers) then [] else [headers]
      _.each metrics, (valueMap) ->
        data.push _.values(valueMap)
      sheet = new Worksheet()
      sheet.addData(data)
      wb.addSheet(metricId, sheet)
    wb

Meteor.methods
  'metrics/download': ->
    unless Users.is.admin()
      throw new Meteor.Error(403, 'User is not an admin')
    wb = Metrics.toExcel()
    XLSX.write wb, {bookType: 'xlsx', bookSST: true, type: 'binary'}
