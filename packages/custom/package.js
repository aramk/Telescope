Package.describe({
  summary: 'Telescope custom package – use as template for your own packages',
  version: '0.1.0',
  name: 'my-custom-package'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use([
    'underscore',
    'telescope:core@0.20.4',
    'matb33:collection-hooks@0.8.0',
    'momentjs:moment@2.10.3'
  ], ['client', 'server']);

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/custom_namespace.js',
    'lib/template_modules.js',
    'lib/callbacks.js',
    'lib/views.js'
  ], ['client', 'server']);

  // client

  api.addFiles([
    // Stylesheets
    'lib/client/stylesheets/_elements.scss',
    'lib/client/stylesheets/_layout.scss',
    'lib/client/stylesheets/_mixins.scss',
    'lib/client/stylesheets/_nav.scss',
    'lib/client/stylesheets/_colors.scss',
    'lib/client/stylesheets/custom.scss',
    'lib/client/stylesheets/hero.scss',
    'lib/client/stylesheets/user_comments.scss',
    'lib/client/stylesheets/profile.scss',

    // Templates
    'lib/client/templates/custom_comment_item.js',
    'lib/client/templates/custom_comment_list.js',
    'lib/client/templates/hero_layout.html',
    'lib/client/templates/hero_layout.js',
    'lib/client/templates/post_context.html',
    'lib/client/templates/postButton.html',
    'lib/client/templates/postButton.js',
    'lib/client/templates/postCallToAction.html',
    'lib/client/templates/privacy_policy.html',
    'lib/client/templates/privacy_policy.js',
    'lib/client/templates/modals/submit_message_modal.html',
    'lib/client/templates/modals/submit_message_modal.js',
    'lib/client/templates/textie_categories.html',
    'lib/client/templates/textie_categories.js',
    'lib/client/templates/textie_comments_list.html',
    'lib/client/templates/textie_comments_list.js',
    'lib/client/templates/textie_footer.html',
    'lib/client/templates/textie_nav.html',
    'lib/client/templates/textie_nav.js',
    'lib/client/templates/textie_user_comments.html',
    'lib/client/templates/textie_user_comments.js',
    'lib/client/templates/textie_user_menu.html',
    'lib/client/templates/textie_user_menu_label.html',
    'lib/client/templates/textie_user_posts.html',
    'lib/client/templates/textie_user_posts.js',
    'lib/client/templates/textie_comment_item.html',
    'lib/client/templates/textie_comment_item.js',
    'lib/client/templates/textie_postsLoadMore.html',
    'lib/client/templates/textie_postsLoadMore.js',
    'lib/client/templates/trending_posts.html',
    'lib/client/templates/trending_posts.js',
    // 'lib/client/templates/hello.html',
    // 'lib/client/templates/hello.js',
    // 'lib/client/templates/custom_post_title.html',
    // 'lib/client/templates/custom_post_title.js',

    // Elements
    'lib/client/elements/ReactiveElement.js',

    // Misc
    'lib/client/icons.js',
    'lib/client/routes.js',
    'lib/client/subscriptions.js',
    'lib/client/templates.js',
    'lib/client/menus.js'
  ], 'client');

  // server

  api.addFiles([
    'lib/server/Emails.js',
    'lib/server/emails/postNotificationEmail.html',
    'lib/server/templates/custom_emailPostItem.handlebars'
  ], 'server');

  api.export([
    'Emails'
  ], 'server');

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});

Package.onTest(function(api) {
  api.use([
    'coffeescript',
    'tinytest',
    'test-helpers',
    'practicalmeteor:munit',

    'momentjs:moment',
    'telescope:core',
    'my-custom-package'
  ], 'server');
  api.addFiles([
    'tests/shims.coffee',
    'tests/EmailsSpec.coffee'
  ], 'server');
});
