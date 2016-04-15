import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('add-answer', {path: '/add-answer/add-answer_id'});
});

export default Router;
