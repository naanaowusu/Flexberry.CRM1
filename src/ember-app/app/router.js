import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-c-r-m-adminstrator-l');
  this.route('i-i-s-c-r-m-adminstrator-e',
  { path: 'i-i-s-c-r-m-adminstrator-e/:id' });
  this.route('i-i-s-c-r-m-adminstrator-e.new',
  { path: 'i-i-s-c-r-m-adminstrator-e/new' });
  this.route('i-i-s-c-r-m-company-l');
  this.route('i-i-s-c-r-m-company-e',
  { path: 'i-i-s-c-r-m-company-e/:id' });
  this.route('i-i-s-c-r-m-company-e.new',
  { path: 'i-i-s-c-r-m-company-e/new' });
  this.route('i-i-s-c-r-m-contact-l');
  this.route('i-i-s-c-r-m-contact-e',
  { path: 'i-i-s-c-r-m-contact-e/:id' });
  this.route('i-i-s-c-r-m-contact-e.new',
  { path: 'i-i-s-c-r-m-contact-e/new' });
  this.route('i-i-s-c-r-m-product-l');
  this.route('i-i-s-c-r-m-product-e',
  { path: 'i-i-s-c-r-m-product-e/:id' });
  this.route('i-i-s-c-r-m-product-e.new',
  { path: 'i-i-s-c-r-m-product-e/new' });
});

export default Router;
