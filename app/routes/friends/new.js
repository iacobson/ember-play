import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // created a new record the application `store` but will not save it to the DB. The save action will save it in the db. In this case the save takes place in the Controller.
    return this.store.createRecord('friend');
  },

  // Ember.Route has a set of hooks that are called at different times during the route lifetime
  // resetController is one of them
  resetController(controller, isExiting) {
    if (isExiting) {
      // We grab the model from the controller
      var model = controller.get('model');
      // Because we are leaving the Route we verify if the model is in
      // 'isNew' state, which means it wasn't saved to the backend.
      if (model.get('isNew')) {
        // We call DS#destroyRecord() which removes it from the store, so it will not display on index after cancel action
        model.destroyRecord();
      }
    }
  }
});
