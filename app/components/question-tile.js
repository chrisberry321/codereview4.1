import Ember from 'ember';

export default Ember.Component.extend({
  isNotesShowing: false,
  updateQuestionForm: false,

  actions: {
    responseFormShow() {
      this.set('addNewResponse', true);
    },
    save4() {
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
      };
      this.set('addNewResponse', false);
      this.sendAction('save5', params);
    },
    update(response, params) {
      this.sendAction('update', response, params);
    },
    delete(response) {
      if (confirm('Are you sure you want to delete this response?')) {
        this.sendAction('destroyResponse', response);
      }
    },
    delete(question) {
      if (confirm('Why you want to delete this question?')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
