import dateHelpers from 'borrowers/utils/date-helpers';
import { module, test } from 'qunit';

module('Unit | Utility | date helpers');

test('formats a date object', function(assert){
  let date = new Date('11-2-2015');
  let result = dateHelpers.formatDate(date, 'ddd MMM DD YYYY');

  assert.equal(result, 'Mon Nov 02 2015');
})
