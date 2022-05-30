import { Serializer as ContactInActivitySerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-r-m-contact-in-activity';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ContactInActivitySerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
