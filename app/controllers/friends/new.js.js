import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.email',
    'model.firstName',
    'model.lastName',
    'model.twitter',
    { get() {
        // if any of the fields is empty, will return false
        return !Ember.isEmpty(this.get('model.email')) &&
          !Ember.isEmpty(this.get('model.firstName')) &&
          !Ember.isEmpty(this.get('model.lastName')) &&
          !Ember.isEmpty(this.get('model.twitter'));
      }
    }
  ),

  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save()
        .then((friend) => {   // the fat arrow is ES6 short way to create function. It keeps the same context as the scope where was defined.
          this.transitionToRoute('friends.show', friend);
        });
      } else {
        // errorMessage is defined into the `-form` partial
        this.set('errorMessage', 'You have to fill all fields');
        return false;
      }
    },
    cancel() {
      this.transitionToRoute('friends')
      return false;
    }
  }
});
