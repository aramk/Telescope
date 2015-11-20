ReactiveElement = function(elemOrSelector, template) {
  this.reactiveVar = new ReactiveVar();
  this.element = null;
  this.template = template;
  this._elemOrSelector = elemOrSelector;
  if (isNode(elemOrSelector)) {
    this.element = elemOrSelector;
  }
};

_.extend(ReactiveElement.prototype, {

  setUp: function() {
    if (!this.element) {
      this.element = this.template.find(this._elemOrSelector);
    }
    if (!this.element) {
      throw new Error('No element provided');
    }
    $(this.element).change(this._update.bind(this));
    this._update();
  },

  _update: function() {
    var value = $('.active', this.element).text().trim() || null;
    this.reactiveVar.set(value);
  },

  getVar: function() {
    return this.reactiveVar;
  }

});

function isNode(o) {
  if (typeof Node == 'object') {
    return o instanceof Node
  } else {
    return typeof o == 'object' && typeof o.nodeName == 'string'
  }
}
