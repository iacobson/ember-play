import Ember from 'ember';

export default Ember.Controller.extend({
  //Sorting by friends or articles
  queryParams: ['sortBy', 'sortAscending'],
  sortAscending: true,
  // http://emberjs.com/api/classes/Ember.Enumerable.html#method_sortBy
  sortBy: 'firstName',

  actions: {
    setSortBy: function (fieldName) {
      this.set('sortBy', fieldName);
      this.toggleProperty('sortAscending');

      console.log('Sorting by ', fieldName);
      console.log('Sorting Asc?: ', this.get('sortAscending'));
      // not to bubble up
      return false;
    }
  }

});

