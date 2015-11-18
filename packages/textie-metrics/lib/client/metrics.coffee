Meteor.startup ->

  Router.onBeforeAction Router._filters.isAdmin, {only: ['metrics']}

  Router.route '/metrics',
    name: 'metrics'
    controller: Telescope.controllers.admin

  Telescope.menuItems.add 'adminMenu', [{
    route: -> Router.path('metrics')
    label: 'metrics',
    description: 'view_metrics'
  }]

TemplateClass = Template.metrics

TemplateClass.events
  'click .btn.btn-primary': (e, template) ->
    $button = $(e.currentTarget)
    $button.addClass('disabled')
    Meteor.call 'metrics/download', (err, result) ->
      $button.addClass('false')
      if err then return alert "Failed to download: #{err}"

      ab = ExcelUtils.arrayBufferFromString(result)
      blob = new Blob [ab], {type: 'application/octet-stream'}
      moment().format()
      dateId = ExcelUtils.dateIdentifier()
      saveAs blob, "textie-metrics-#{dateId}.xlsx"
