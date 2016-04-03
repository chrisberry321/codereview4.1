import Ember from 'ember';


export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
    questions: this.store.findAll('question'),
    responses: this.store.findAll('response'),
  });
  },
  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    save6(params) {
      var newResponse = this.store.createRecord('response', params);
      newResponse.save();
      this.transitionTo('index');
    },
    destroyResponse(response) {
      response.destroyRecord();
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
  }
});
