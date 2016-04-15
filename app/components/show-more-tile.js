import Ember from 'ember';

export default Ember.Component.extend({

  sortedAnswers: Ember.computed.sort('question.answers', function(a,b) {
    var atime = moment(Ember.get(a, 'date')),
        btime = moment(Ember.get(b, "date"));
        if(atime !== btime) {
          return btime - atime;
        }
  }),

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
