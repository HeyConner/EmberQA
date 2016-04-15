import Ember from 'ember';

export default Ember.Component.extend({
  isEditShowing: false,
  actions: {
    editShow: function() {
      this.set('isEditShowing', true);
    },
    editHide: function() {
      this.set('isEditShowing', false);
    },
    delete(question) {
      if(confirm('Are you sure you want to delete this Question?')) {
        this.sendAction('destroyQuestion', question);
        }
      },
    update(question) {
      var params = {
        author: this.get("author"),
        newQuestion: this.get('newQuestion'),
        body: this.get("body"),
        date: moment().format()
      };
      this.sendAction("updateQuestion", question, params);
      this.set('isEditShowing', false);
    }

  }
});
