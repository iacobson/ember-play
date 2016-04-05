import Ember from 'ember';

export default Ember.Route.extend({
  resetController(controller, isExisting) {
    if (isExisting) {
      var model = controller.get('model');
      // delete unsaved model from the store, so it will not display on the index on cancel action
      // http://emberjs.com/api/data/classes/DS.Model.html#method_rollbackAttributes
      model.rollbackAttributes();
    }
  }
});
