import Ember from 'ember';

// consuming funtion created in utils/date-helpers

import { formatDate } from '../utils/date-helpers';

export function formattedDate([date, format]) {
  return formatDate(date, format);
}

export default Ember.Helper.helper(formattedDate);
