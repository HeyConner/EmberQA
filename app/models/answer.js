import Model from 'ember-data/model';

export default Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  date: DS.attr(),
  question: DS.belongsTo('question', {async:true})
});
