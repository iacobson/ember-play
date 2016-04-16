import Ember from 'ember';

export default Ember.Controller.extend({
  possibleStates: ["borrowed", "returned"],

  // tesing Observers .[] and @each
  contentDidChange: Ember.observer('model.[]', function() {
    console.log('Called when we add or removed an article.');
  }),
  stateDidChange: Ember.observer('model.@each.state', function() {
    console.log('Called when the state property change for any of the articles.');
  })
});
