import moment from 'moment';

export default dateString => Math.max(moment().diff(moment(dateString, 'DD-MM-YYYY', true), 'years'), 0);
