Telescope.menuItems.add('userMenu', [
  {
    route: function () {
      return 'mailto:textieinfo@gmail.com?subject=textie love';
    },
    label: 'contact_us',
    order: 1
  },
  {
    route: function () {
      return 'http://textie.strikingly.com/';
    },
    label: 'media_pack'
  },
  {
    route: function () {
      return '/privacy';
    },
    label: 'privacy_policy'
  },
  {
    route: function () {
      return 'https://www.facebook.com/TextieHQ';
    },
    label: 'facebook'
  },
  {
    route: function () {
      return 'https://twitter.com/textieapp';
    },
    label: 'twitter'
  }
]);

// Move sign out to bottom.
Telescope.menuItems.remove('userMenu', 'sign_out');
Telescope.menuItems.add('userMenu', [
  {
    route: 'signOut',
    label: 'sign_out',
    description: 'sign_out'
  }
]);
