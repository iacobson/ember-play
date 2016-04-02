import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // delete will be shared for both index and show templates
    delete(friend) {
      friend.destroyRecord().then(() => {
        this.transitionTo('friends.index');
      });
    }
  }
});
