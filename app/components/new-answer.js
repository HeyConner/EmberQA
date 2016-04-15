import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShowing: false,
  actions: {
    addAnswer(){
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        question: this.get('question'),
        date: moment().format()
      };
      this.sendAction('sendAnswer', params);
      this.set('isAnswerShowing', false)
      },
      answerHide: function() {
        this.set('isAnswerShowing', false);
      },
      answerShow: function() {
        this.set('isAnswerShowing', true);
      }
  }
});
