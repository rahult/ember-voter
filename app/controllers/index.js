var IndexController = Ember.ArrayController.extend({
  sortAscending: false,
  sortProperties: ['votes', 'title']
});

export default IndexController;
