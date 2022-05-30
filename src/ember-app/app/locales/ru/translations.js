import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'CRM',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'CRM',
          title: 'CRM'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
