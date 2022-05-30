import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISCRMAdminstratorLForm from './forms/i-i-s-c-r-m-adminstrator-l';
import IISCRMCompanyLForm from './forms/i-i-s-c-r-m-company-l';
import IISCRMContactLForm from './forms/i-i-s-c-r-m-contact-l';
import IISCRMProductLForm from './forms/i-i-s-c-r-m-product-l';
import IISCRMAdminstratorEForm from './forms/i-i-s-c-r-m-adminstrator-e';
import IISCRMCompanyEForm from './forms/i-i-s-c-r-m-company-e';
import IISCRMContactEForm from './forms/i-i-s-c-r-m-contact-e';
import IISCRMProductEForm from './forms/i-i-s-c-r-m-product-e';
import IISCRMActivityModel from './models/i-i-s-c-r-m-activity';
import IISCRMAdminstratorModel from './models/i-i-s-c-r-m-adminstrator';
import IISCRMCompanyModel from './models/i-i-s-c-r-m-company';
import IISCRMContactInActivityModel from './models/i-i-s-c-r-m-contact-in-activity';
import IISCRMContactModel from './models/i-i-s-c-r-m-contact';
import IISCRMProductModel from './models/i-i-s-c-r-m-product';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-c-r-m-activity': IISCRMActivityModel,
    'i-i-s-c-r-m-adminstrator': IISCRMAdminstratorModel,
    'i-i-s-c-r-m-company': IISCRMCompanyModel,
    'i-i-s-c-r-m-contact-in-activity': IISCRMContactInActivityModel,
    'i-i-s-c-r-m-contact': IISCRMContactModel,
    'i-i-s-c-r-m-product': IISCRMProductModel
  },

  'application-name': 'CRM',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'CRM',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'CRM',
          title: 'CRM'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'c-r-m': {
          caption: 'CRM',
          title: 'CRM',
          'i-i-s-c-r-m-contact-l': {
            caption: 'Contact',
            title: ''
          },
          'i-i-s-c-r-m-product-l': {
            caption: 'Product',
            title: ''
          },
          'i-i-s-c-r-m-adminstrator-l': {
            caption: 'Adminstrator',
            title: ''
          },
          'i-i-s-c-r-m-company-l': {
            caption: 'Company',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-c-r-m-adminstrator-l': IISCRMAdminstratorLForm,
    'i-i-s-c-r-m-company-l': IISCRMCompanyLForm,
    'i-i-s-c-r-m-contact-l': IISCRMContactLForm,
    'i-i-s-c-r-m-product-l': IISCRMProductLForm,
    'i-i-s-c-r-m-adminstrator-e': IISCRMAdminstratorEForm,
    'i-i-s-c-r-m-company-e': IISCRMCompanyEForm,
    'i-i-s-c-r-m-contact-e': IISCRMContactEForm,
    'i-i-s-c-r-m-product-e': IISCRMProductEForm
  },

});

export default translations;
