import Ember from 'ember';

export default Ember.Component.extend({
  isEditShowing: false,
  isShowMoreShowing: false,
  actions: {
    editShow: function() {
      this.set('isEditShowing', true);
    },
    editHide: function() {
      this.set('isEditShowing', false);
    },
    showMoreShow: function() {
      this.set('itsShowMoreShowing', true);
    },
    showMoreHide: function() {
      this.set('isShowMoreShowing', false)
    }
  }
});
