import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location : config.locationType
});

Router.map(function () {
    this.route('about');
    this.route('contact');

    this.route('admin', function () {
      this.route('invitations', function () {
          this.route('view');
          this.route('edit', { path : '/:invitation_id/edit' });
      });

      this.route('contacts', function () {
          this.route('view');
          this.route('edit', { path : '/:contact_id/edit' });

      });
    });

    this.route('libraries', function () {
        this.route('new');
        this.route('edit', { path : '/:library_id/edit' });
    });
});

export default Router;
