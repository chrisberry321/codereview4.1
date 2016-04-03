import Ember from 'ember';

export default Ember.Component.extend({
  updateResponseForm: false,
   actions: {
     updateResponseForm() {
       this.set('updateResponseForm', true);
     },
     update(response) {
       var params = {
        answer: this.get('answer'),
         author: this.get('author'),
       };
       this.set('updateResponseForm', false);
       this.sendAction('update', response, params);
     }
   }
 });
