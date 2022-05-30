import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  typeOfProduct: DS.attr('i-i-s-c-r-m-t-product'),
  company: DS.belongsTo('i-i-s-c-r-m-company', { inverse: null, async: false }),
  activity: DS.hasMany('i-i-s-c-r-m-activity', { inverse: 'product', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-c-r-m-product.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  typeOfProduct: {
    descriptionKey: 'models.i-i-s-c-r-m-product.validations.typeOfProduct.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  company: {
    descriptionKey: 'models.i-i-s-c-r-m-product.validations.company.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  activity: {
    descriptionKey: 'models.i-i-s-c-r-m-product.validations.activity.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ProductE', 'i-i-s-c-r-m-product', {
    name: attr('Name', { index: 0 }),
    typeOfProduct: attr('Type of product', { index: 1 }),
    company: belongsTo('i-i-s-c-r-m-company', 'Company', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' }),
    activity: hasMany('i-i-s-c-r-m-activity', 'Activity', {
      name: attr('Name', { index: 0 }),
      activityType: attr('Activity type', { index: 1 }),
      contactInActivity: hasMany('i-i-s-c-r-m-contact-in-activity', 'Contact in activity', {
        dateOfActivity: attr('Date of activity', { index: 0 }),
        result: attr('Result', { index: 1 }),
        contact: belongsTo('i-i-s-c-r-m-contact', 'Contact', {
          name: attr('Name', { index: 3, hidden: true })
        }, { index: 2, displayMemberPath: 'name' })
      })
    })
  });

  modelClass.defineProjection('ProductL', 'i-i-s-c-r-m-product', {
    name: attr('Name', { index: 0 }),
    typeOfProduct: attr('Type of product', { index: 1 }),
    company: belongsTo('i-i-s-c-r-m-company', 'Name', {
      name: attr('Name', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
