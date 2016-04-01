import DS from 'ember-data';

export default DS.Model.extend({
  submit: DS.attr(),
  author: DS.attr(),
  notes: DS.attr()
});
