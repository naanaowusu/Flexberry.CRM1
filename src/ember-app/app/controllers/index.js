import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.c-r-m.caption'),
          title: i18n.t('forms.application.sitemap.c-r-m.title'),
          children: [{
            link: 'i-i-s-c-r-m-contact-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-contact-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-contact-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-c-r-m-product-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-product-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-product-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-c-r-m-adminstrator-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-adminstrator-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-adminstrator-l.title'),
            children: null
          }, {
            link: 'i-i-s-c-r-m-company-l',
            caption: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-company-l.caption'),
            title: i18n.t('forms.application.sitemap.c-r-m.i-i-s-c-r-m-company-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})