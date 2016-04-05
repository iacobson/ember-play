import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.modelFor('friends/show').get('articles');
  },

  // save model changes from the article-row component. The model is passed from the component
  actions: {
    save(model) {
      model.save();
      return false;
    }
  }
});
