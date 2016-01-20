// MODEL (Mvc)
var NameModel = Backbone.Model.extend({
  defaults: { name: 'NO NAME' }
});

// VIEW CONTROLLER (mVC)
var ViewClass = Backbone.View.extend({
	template: _.template($('#template').html()),
  events: {
 		'submit form': '_changeName'
  },
  _changeName: function (event) {
		var name = event.currentTarget.elements[0].value;
    event.preventDefault();
    this.model.set({ name: name });
 	},
	initialize: function () {
		this.model.on('change', this.render, this);
    this.render();
  },
 	render: function () {
		var markup = this.template(this.model.attributes);
		this.$el.html(markup);
    return this;
 	}
});

// CONTROLLER (mvC)
var model = new NameModel({ name: 'Brev' });
var view = new ViewClass({ el: $('#container'), model: model });

setTimeout(function() {
  model.set({ name: 'Yonkers' });  // simulate network input
}, 1000 * 8);
