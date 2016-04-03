import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord( 'response', params.response_id);
  },
  actions: {
    save6(params) {
      var newResponse = this.store.createRecord('response', params);
      newResponse.save();
      this.transitionTo('index');
    },
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
