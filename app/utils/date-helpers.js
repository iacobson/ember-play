// using moment library as util. can be imported as : import { formatDate } from '../utils/date-helpers

function formatDate(date, format) {
  return window.moment(date).format(format);
}

export {
  formatDate
};
