import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('stories', function() {
    this.route('new');
    this.route('edit', { path: '/:storie_id/edit' });
    this.route('view', { path: '/:storie_id/view' });
  });
  this.route('storie');
});

export default Router;
