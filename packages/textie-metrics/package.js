Package.describe({
  name: 'textie:metrics',
  summary: 'Metrics for posts, comments, votes, and users.',
  version: '0.1.0'
});

Package.onUse(function (api) {
  
  api.use([
    'underscore',
    'coffeescript',
    'telescope:core@0.20.4',
    'momentjs:moment@2.10.3'
  ], ['client', 'server']);

  api.addFiles([
    'lib/MetricUtils.coffee',
    'lib/DocMetrics.coffee',
    'lib/PostMetrics.coffee',
    'lib/Metrics.coffee'
  ], 'server');

  api.export([
    'Metrics'
  ], 'server');

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
