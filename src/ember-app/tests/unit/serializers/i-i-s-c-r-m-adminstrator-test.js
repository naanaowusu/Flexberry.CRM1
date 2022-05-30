import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-c-r-m-adminstrator', 'Unit | Serializer | i-i-s-c-r-m-adminstrator', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-c-r-m-adminstrator',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-c-r-m-t-activity',
    'transform:i-i-s-c-r-m-t-gender',
    'transform:i-i-s-c-r-m-t-product',

    'model:i-i-s-c-r-m-activity',
    'model:i-i-s-c-r-m-adminstrator',
    'model:i-i-s-c-r-m-company',
    'model:i-i-s-c-r-m-contact-in-activity',
    'model:i-i-s-c-r-m-contact',
    'model:i-i-s-c-r-m-product',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
