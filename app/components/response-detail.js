import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(response) {
      if(confirm('why you want to get rid of an answer?')) {
        this.sendAction('destroyResponse', response);
      }
    }
  }
});
