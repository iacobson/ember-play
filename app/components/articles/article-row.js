import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr', // the html tag for the component (in this case a table row). If not specified, will be `div` by default
  article: null, // passed-in
  articleStates: null, //passed-in
  // UNLIKE controllers and routes, the actions in COMPONENTS won't bubble up automatically
  actions: {
    saveArticle() {
      let article = this.get('article');
      // bind the action to a property and call it in the component with `sendAction`
      // in this case we call the action save from the articles new route
      if (article.get('hasDirtyAttributes')) {
        this.sendAction('save', article);
      }
    }
  }
});
