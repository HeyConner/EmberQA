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
  }
});
