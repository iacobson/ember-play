import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed.notEmpty('model.description'),

  actions: {
    save() {    // `save` is a promise
      if (this.get('isValid')) {
        return true;
      } else {
        this.set('errorMessage', 'The article needs a description');
        return false;
      }
    }
  }
});
