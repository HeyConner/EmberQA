import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },

  actions: {
    createQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
    },
    updateQuestion(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
    },
    destroyQuestion(question) {
     question.destroyRecord();
   },
   createAnswer(params) {
     var newAnswer = this.store.createRecord('answer', params);
     var question = params.question;
     question.get('answers').addObject(newAnswer);
     newAnswer.save().then(function() {
       return question.save();
     })
   }
  }
});
