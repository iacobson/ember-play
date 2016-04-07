// using moment library as util. can be imported as : import { formatDate } from '../utils/date-helpers
// import moment via browserify addon
import moment from 'npm:moment';
function formatDate(date, format) {
  return moment(date).format(format);
}

export {
  formatDate
};
