import Ember from 'ember';

export default Ember.Route.extend({
  //ember is based on convention over configuration.
  //The pattern of having dynamic segments like model_name_id is so common that if the dynamic segment ends with _id, then the model hook is generated automatically and calls:
  // this.store(‘model_name’, params.model_name_id)
});
