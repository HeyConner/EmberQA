import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  newQuestion: DS.attr(),
  body: DS.attr(),
  date: DS.attr()
});
