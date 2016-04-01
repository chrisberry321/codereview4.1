import Ember from 'ember';

export default Ember.Component.extend({
  isNotesShowing: false,
  actions: {
    notesShow: function() {
      this.set('isNotesShowing', true);
    },

    notesHide: function() {
      this.set('isNotesShowing', false);
    },

    update(question, params) {
      this.sendAction('update', question, params);
    },
    
    delete(question) {
      if (confirm('Why you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
