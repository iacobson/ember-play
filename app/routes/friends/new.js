import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // created a new record the application `store` but will not save it to the DB. The save action will save it in the db. In this case the save takes place in the Controller.
    return this.store.createRecord('friend');
  }
});
