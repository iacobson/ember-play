import DS from 'ember-data';
// importing Ember is necessary for the `conputed`
import Ember from 'ember';

export default DS.Model.extend({
  // define relationship
  articles: DS.hasMany('article'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: Ember.computed( 'firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  })

});
