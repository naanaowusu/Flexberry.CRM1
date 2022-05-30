import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  dateOfActivity: DS.attr('date'),
  result: DS.attr('string'),
  contact: DS.belongsTo('i-i-s-c-r-m-contact', { inverse: null, async: false }),
  activity: DS.belongsTo('i-i-s-c-r-m-activity', { inverse: 'contactInActivity', async: false })
});

export let ValidationRules = {
  dateOfActivity: {
    descriptionKey: 'models.i-i-s-c-r-m-contact-in-activity.validations.dateOfActivity.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  result: {
    descriptionKey: 'models.i-i-s-c-r-m-contact-in-activity.validations.result.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  contact: {
    descriptionKey: 'models.i-i-s-c-r-m-contact-in-activity.validations.contact.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  activity: {
    descriptionKey: 'models.i-i-s-c-r-m-contact-in-activity.validations.activity.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ContactInActivityE', 'i-i-s-c-r-m-contact-in-activity', {
    dateOfActivity: attr('Date of activity', { index: 0 }),
    result: attr('Result', { index: 1 }),
    contact: belongsTo('i-i-s-c-r-m-contact', 'Contact', {
      name: attr('Name', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'name' })
  });
};
