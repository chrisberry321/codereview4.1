import Ember from 'ember';

export default Ember.Component.extend({
  isNotesShowing: false,
  actions: {
    delete(question) {
      if (confirm('Why you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
