import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord( 'response', params.response_id);
  },
  actions: {
    update(response, params) {
     Object.keys(params).forEach(function(key) {
       if(params[key]!==undefined) {
         response.set(key,params[key]);
       }
     });
     response.save();
     this.transitionTo('index');
   },
    destroyResponse(response) {
      response.destroyRecord();
      this.transitionTo('index');
    }
  }
});
