import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import TextInput from '../textInput/TextInput';
import getAge from '../utils/getAge';

export const className = 'datepicker';
export const initialState = {
	day: '',
	month: '',
	year: ''
};

class Datepicker extends Component {

	constructor(props) {

		super(props);

		this.state = initialState;

	}

	getStandardDateString() {

		const { day, month, year } = this.state;
		const standardisedDay = day.length === 1 ? `0${day}` : day;
		const standardisedMonth = month.length === 1 ? `0${month}` : month;

		return `${standardisedDay}-${standardisedMonth}-${year}`;

	}

	handleDateChange = (timeUnit, maxLength) => (e) => {

		const { value = '' } = e.target;

		if (/^\d+$/.test(value) || (value.length === 0)) {

			this.setState({ [timeUnit]: value.slice(0, maxLength) });

		}

	}

	isValidDate() {

		const date = moment(this.getStandardDateString(), 'DD-MM-YYYY', true);

		return date.isValid();

	}

	handleKeyPress = (e) => {

		if (e.key === 'Enter' && this.isValidDate()) {

			this.props.updateChoice(this.getStandardDateString());

		}

	}

	render() {

		const validDate = this.isValidDate();
		const { day, month, year } = this.state;
		const age = validDate ? getAge(this.getStandardDateString()) : '';

		return (

			<div className={className} onKeyPress={this.handleKeyPress}>

				<div className={`${className}__inputs`}>

					<TextInput
						label="DD"
						maxLength={2}
						onChange={this.handleDateChange('day', 2)}
						value={day}
						delayedFocus
					/>

					<TextInput
						label="MM"
						maxLength={2}
						onChange={this.handleDateChange('month', 2)}
						value={month}
					/>

					<TextInput
						label="YYYY"
						maxLength={4}
						onChange={this.handleDateChange('year', 4)}
						value={year}
					/>

				</div>

				<button
					type="button"
					disabled={!validDate}
					onClick={() => this.props.updateChoice(this.getStandardDateString())}
				>

					<span>Submit</span>

					<span className={`${className}__ageText`}>({age || '--'} years old)</span>

				</button>

			</div>

		);

	}

}

Datepicker.propTypes = {
	updateChoice: PropTypes.func
};

export default Datepicker;
