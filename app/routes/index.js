import Ember from 'ember';

var question = [{
  id:1,
  author: "Conner Belvin",
  newQuestion: "Where is the bathroom?",
  body: "I cant seem to find the bathroom anywhere.",
  date: "April 12, 2010"
},
  {
  id:2,
  author: "Carly Belvin",
  newQuestion: "Where are my hands?",
  body: "I lost my hands.",
  date: "October 29th, 1999"}];

export default Ember.Route.extend({
  model() {
    return question;
  },
});
