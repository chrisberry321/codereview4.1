import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(response, params) {
     this.sendAction('update', response, params);
   },
    delete(response) {
      if (confirm('Are you sure you want to delete this response?')) {
        this.sendAction('destroyResponse', response);
      }
    }
  }
});
