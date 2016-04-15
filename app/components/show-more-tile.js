import Ember from 'ember';

export default Ember.Component.extend({
  isShowMoreShowing: false,
  actions: {
    showMoreShow: function() {
      this.set('isShowMoreShowing', true);
    },
    showMoreHide: function() {
      this.set('isShowMoreShowing', false)
    },
    sendAnswer(params) {
      this.sendAction('createAnswer', params)
    }
  }
});
