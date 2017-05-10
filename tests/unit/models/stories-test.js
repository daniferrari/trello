import { moduleForModel, test } from 'ember-qunit';

moduleForModel('stories', 'Unit | Model | stories', {
  // Specify the other units that are required for this test.
  needs: ['model:task']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
