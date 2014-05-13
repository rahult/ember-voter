var VoteController = Ember.ObjectController.extend({
  updateVotes: function(idea, number) {
    var votes = idea.get('votes');
    idea.set('votes', votes + number);
    idea.save();
  },
  actions: {
    up: function () {
      this.updateVotes(this.get('model'), 1);
    },
    down: function () {
      this.updateVotes(this.get('model'), -1);
    },
    remove: function () {
      var idea = this.get('model');
      idea.deleteRecord();
      idea.save();
    }
  }
});

export default VoteController;
