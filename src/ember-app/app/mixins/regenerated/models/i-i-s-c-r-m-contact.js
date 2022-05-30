import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  telephone: DS.attr('string'),
  adress: DS.attr('string'),
  gender: DS.attr('i-i-s-c-r-m-t-gender'),
  email: DS.attr('string'),
  company: DS.belongsTo('i-i-s-c-r-m-company', { inverse: null, async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  surname: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  telephone: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.telephone.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  adress: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.adress.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  gender: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.gender.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  company: {
    descriptionKey: 'models.i-i-s-c-r-m-contact.validations.company.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ContactE', 'i-i-s-c-r-m-contact', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    telephone: attr('Telephone', { index: 2 }),
    adress: attr('Adress', { index: 3 }),
    gender: attr('Gender', { index: 4 }),
    email: attr('Email', { index: 5 })
  });

  modelClass.defineProjection('ContactL', 'i-i-s-c-r-m-contact', {
    name: attr('Name', { index: 0 }),
    surname: attr('Surname', { index: 1 }),
    telephone: attr('Telephone', { index: 2 }),
    adress: attr('Adress', { index: 3 }),
    gender: attr('Gender', { index: 4 }),
    email: attr('Email', { index: 5 })
  });
};
