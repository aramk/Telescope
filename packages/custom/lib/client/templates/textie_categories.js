var TemplateClass = Template.textie_categories;

var CATEGORY_GROUP_SELECTOR = '.categories.btn-group';

TemplateClass.onCreated(function() {
  this.category = new ReactiveElement(CATEGORY_GROUP_SELECTOR, this);
});

TemplateClass.onRendered(function() {
  this.category.setUp();
  var $groupSelector = $(CATEGORY_GROUP_SELECTOR);
  $('.btn:first', $groupSelector).trigger('click');
});

TemplateClass.helpers({
  categories: function() {
    return getCategoryMap();
  },
  activeCategory: function() {
    return Template.instance().category.getVar().get();
  },
  arguments: function() {
    var categoryLabel = Template.instance().category.getVar().get();
    var category = _.find(getCategoryMap(), function(item) {
      return item.label === categoryLabel;
    });
    if (!category) return;
    return {
      terms: {
        view: 'categoryPosts',
        postCategory: category.value, 
        limit: 10,
        enableCache: false,
        subscribeToUsers: false
      }
    };
  }
});

function getCategoryMap() {
  return Posts.simpleSchema().schema('category').autoform.options;
}
