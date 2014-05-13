export default Ember.Route.extend({
  model: function () {
    return this.store.find('idea');
  },

  actions: {
    submit: function (e) {
      var self  = this;
      var store = self.store;
      var idea  = self.controller.get('idea');
      if (idea.length < 10) {
        alert('Please enter atleast 10 characters');
      } else {
        var ideaRecord = store.createRecord('idea', { title: idea });
        ideaRecord.save().then(function() {
          self.controller.set('idea', '');
        });
      }

      return false;
    }
  }
});
