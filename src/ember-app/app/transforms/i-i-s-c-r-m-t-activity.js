import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tActivityEnum from '../enums/i-i-s-c-r-m-t-activity';

export default FlexberryEnum.extend({
  enum: tActivityEnum,
  sourceType: 'IIS.CRM.tActivity'
});
