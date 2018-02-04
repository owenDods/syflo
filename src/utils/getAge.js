import moment from 'moment';

export default dateString => moment().diff(moment(dateString, 'DD-MM-YYYY', true), 'years');
