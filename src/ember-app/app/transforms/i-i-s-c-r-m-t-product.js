import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import tProductEnum from '../enums/i-i-s-c-r-m-t-product';

export default FlexberryEnum.extend({
  enum: tProductEnum,
  sourceType: 'IIS.CRM.tProduct'
});
