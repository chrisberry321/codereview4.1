import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('index');
  this.route('question', {path: '/question/:question_id'});
  this.route('response', {path: '/response/:response_id'});
});

export default Router;
