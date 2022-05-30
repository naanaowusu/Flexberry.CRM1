import { Serializer as AdminstratorSerializer } from
  '../mixins/regenerated/serializers/i-i-s-c-r-m-adminstrator';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AdminstratorSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
