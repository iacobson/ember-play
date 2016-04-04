import Ember from 'ember';

// this will be used to host shared logic for friends controllers
export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    function() {
      // if any of the fields is empty, will return false
      return !Ember.isEmpty(this.get('model.email')) &&
        !Ember.isEmpty(this.get('model.firstName')) &&
        !Ember.isEmpty(this.get('model.lastName')) &&
        !Ember.isEmpty(this.get('model.twitter'));
    }
  ),

  actions: {
    save() {    // `save` is a promise
      if (this.get('isValid')) {
        this.get('model').save()
        .then((friend) => {   // the fat arrow is ES6 short way to create function. It keeps the same context as the scope where was defined.
          // `then` will be executed only after the data has been saved to the server
          this.transitionToRoute('articles', friend);
        });
      } else {
        // errorMessage is defined into the `-form` partial
        this.set('errorMessage', 'You have to fill all fields');
        return false;
      }
    },
    cancel() {
      return true;
    }
  }
});
