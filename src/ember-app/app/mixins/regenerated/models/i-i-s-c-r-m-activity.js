import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  activityType: DS.attr('i-i-s-c-r-m-t-activity'),
  product: DS.belongsTo('i-i-s-c-r-m-product', { inverse: 'activity', async: false }),
  contactInActivity: DS.hasMany('i-i-s-c-r-m-contact-in-activity', { inverse: 'activity', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  activityType: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.activityType.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  product: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.product.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  contactInActivity: {
    descriptionKey: 'models.i-i-s-c-r-m-activity.validations.contactInActivity.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ActivityE', 'i-i-s-c-r-m-activity', {
    name: attr('Name', { index: 0 }),
    activityType: attr('Activity type', { index: 1 }),
    contactInActivity: hasMany('i-i-s-c-r-m-contact-in-activity', 'Contact in activity', {
      dateOfActivity: attr('Date of activity', { index: 0 }),
      result: attr('Result', { index: 1 }),
      contact: belongsTo('i-i-s-c-r-m-contact', 'Contact', {
        name: attr('Name', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'name' })
    })
  });
};
