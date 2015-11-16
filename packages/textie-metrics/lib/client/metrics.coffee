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
  'click .btn.btn-primary': ->
    Meteor.call 'metrics/download', (err, result) ->
      ab = ExcelUtils.arrayBufferFromString(result)
      blob = new Blob([ab], {type: 'application/octet-stream'})
      saveAs(blob, 'test.xlsx')
