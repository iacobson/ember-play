import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('friends', function() {
    this.route('new');

    this.route('show', {
      path: ':friend_id'
    }, function() {
      // manually nesting articles under show
      // `resetNamespace` will ensure a correct route:
        // friends/1/articles
        // instead of
        // friends/show/articles
      // also will allow us to define articles routes at top level, not inside friends directory
      this.route('articles', {resetNamespace: true}, function() {

      });
    });

    this.route('edit', {
      path: ':friend_id/edit'
    });
  });
});

export default Router;
