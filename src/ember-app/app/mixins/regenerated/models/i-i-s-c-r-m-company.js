import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  employer: DS.attr('string'),
  role: DS.attr('string'),
  adminstrator: DS.belongsTo('i-i-s-c-r-m-adminstrator', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-c-r-m-company.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  employer: {
    descriptionKey: 'models.i-i-s-c-r-m-company.validations.employer.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  role: {
    descriptionKey: 'models.i-i-s-c-r-m-company.validations.role.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  adminstrator: {
    descriptionKey: 'models.i-i-s-c-r-m-company.validations.adminstrator.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('CompanyE', 'i-i-s-c-r-m-company', {
    name: attr('Name', { index: 0 }),
    employer: attr('Employer', { index: 1 }),
    role: attr('Role', { index: 2 }),
    adminstrator: belongsTo('i-i-s-c-r-m-adminstrator', 'Adminstrator', {
      name: attr('Name', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('CompanyL', 'i-i-s-c-r-m-company', {
    name: attr('Name', { index: 0 }),
    employer: attr('Employer', { index: 1 }),
    role: attr('Role', { index: 2 }),
    adminstrator: belongsTo('i-i-s-c-r-m-adminstrator', 'Name', {
      name: attr('Name', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
