import DS from 'ember-data';
// importing Ember is necessary for the `conputed`
import Ember from 'ember';

export default DS.Model.extend({
  // define relationship
  // async relationship. It will load dependent models on demand.
  // ATTENTION: in Ember Data >2.0, relations are by default async, so probably async: true is not needed anymore
  articles: DS.hasMany('article', {async: true}),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: Ember.computed( 'firstName', 'lastName', function() {
    return this.get('firstName') + ' ' + this.get('lastName');
  })

});
