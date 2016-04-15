import Ember from 'ember';

export default Ember.Component.extend({
  isNewQuestionShowing: false,
  actions: {
    newQuestionShow: function() {
      this.set('isNewQuestionShowing', true);
    },
    newQuestionHide: function() {
      this.set('isNewQuestionShowing', false);
    },
    save1() {
      var params = {
        author: this.get('author'),
        newQuestion: this.get('newQuestion'),
        body: this.get('body'),
        date: moment().format()
      };
      this.set('isNewQuestionShowing', false);
      this.sendAction('save2', params);
    }
  }
});
