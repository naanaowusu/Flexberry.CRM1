import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tGenderEnum from '../enums/i-i-s-c-r-m-t-gender';

export default FlexberryEnum.extend({
  enum: tGenderEnum,
  sourceType: 'IIS.CRM.tGender'
});
