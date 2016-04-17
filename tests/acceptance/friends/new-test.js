import { test } from 'qunit';
import moduleForAcceptance from 'borrowers/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | friends/new');

test('visiting /friends/new', function(assert) {
  visit('/friends/new');

  andThen(function() {
    assert.equal(currentURL(), '/friends/new');
  });
});

test('create a new friend', function(assert){
  visit('/');
  click('a[href="/friends/new"]');

  andThen(function(){
    assert.equal(currentPath(), 'friends.new');
  });

  fillIn('input[placeholder="First Name"]', 'First');
  fillIn('input[placeholder="Last Name"]', 'Last');
  fillIn('input[placeholder="Email"]', 'a@b.c');
  fillIn('input[placeholder="Twitter"]', 'Twit');
  click('input[value="Save"]');

  andThen(function () {
    assert.equal(currentRouteName(), 'articles.index');
  });
});

test('click save without filling fields', function(assert){
  visit('/friends/new');
  click('input[value="Save"]');
  andThen(function(){
    assert.equal(currentRouteName(), 'friends.new');
    assert.equal(find("h2:contains(You have to fill all fields)").length, 1);
  });
});
