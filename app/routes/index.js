export default Ember.Route.extend({
  model: function () {
    return this.store.find('idea');
  },

  actions: {
    submit: function () {
      var self  = this;
      var store = self.store;
      var idea  = self.controller.get('idea');
      if (idea !== '') {
        var ideaRecord = store.createRecord('idea', { title: idea, votes: 1 });
        ideaRecord.save().then(function() {
          self.controller.set('idea', '');
        });
      }
    }
  }
});
