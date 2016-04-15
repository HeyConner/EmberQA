import Model from 'ember-data/model';

export default Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  question: DS.belongsTo('question', {async:true})
});
