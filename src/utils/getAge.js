import moment from 'moment';

export default (dateString, timeUnit = 'years') => Math.max(moment().diff(moment(dateString, 'DD-MM-YYYY', true), timeUnit), 0);
