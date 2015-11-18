Package.describe({
  name: 'textie:metrics',
  summary: 'Metrics for posts, comments, votes, and users.',
  version: '0.1.0'
});

Package.onUse(function (api) {

  // i18n config (must come first)
  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);
  
  api.use([
    'underscore',
    'coffeescript',
    'templating',
    'telescope:core@0.20.4',
    'momentjs:moment@2.10.3',
    'pfafman:filesaver@0.2.1'
  ], ['client', 'server']);

  api.addFiles([
    'lib/server/MetricUtils.coffee',
    'lib/server/DocMetrics.coffee',
    'lib/server/PostMetrics.coffee',
    'lib/server/ReplyMetrics.coffee',
    'lib/server/UserMetrics.coffee',
    'lib/server/VoteMetrics.coffee',
    'lib/server/Worksheet.coffee',
    'lib/server/Workbook.coffee',
    'lib/server/Metrics.coffee'
  ], 'server');

  api.addFiles([
    'lib/server/ExcelUtils.coffee'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/metrics.html',
    'lib/client/metrics.coffee'
  ], 'client');

  api.export([
    'Metrics',
    'Worksheet',
    'Workbook'
  ], 'server');

  api.export([
    'ExcelUtils'
  ], ['client', 'server']);

  // i18n languages (must come last)
  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});

Npm.depends({
  xlsx: '0.8.0'
});

// Package.onTest(function(api) {
//   api.use([
//     'coffeescript',
//     'tinytest',
//     'test-helpers',
//     'practicalmeteor:munit',

//     'momentjs:moment',
//     'telescope:core',
//     'textie:metrics'
//   ], ['client', 'server']);
//   api.addFiles([
//     'tests/shims.coffee',
//   ], 'server');
// });
