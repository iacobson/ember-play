import { moduleForModel, test } from 'ember-qunit';

moduleForModel('friend', 'Unit | Model | friend', {
  // Specify the other units that are required for this test.
  needs: ['model:article']
});

test('it exists', function(assert) {
  // this.subject is an instance of friend
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('fullName joins first and last name', function(assert) {
  let model = this.subject({
    firstName: "First",
    lastName: "Last"
  });
  assert.equal(model.get('fullName'), 'First Last');

  Ember.run(function(){
    model.set('firstName', 'AnotherFirst');
  });
  assert.equal(model.get('fullName'), 'AnotherFirst Last');
});

test('articles relationship', function(assert){
  let klass = this.subject({}).constructor;
  let relationship = Ember.get(klass, 'relationshipsByName').get('articles');

  assert.equal(relationship.key, 'articles');
  assert.equal(relationship.kind, 'hasMany');
});
