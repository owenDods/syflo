import React, { Component } from 'react';

import TextInput from '../textInput/TextInput';

export const className = 'datepicker';
export const initialState = {
	day: null,
	month: null,
	year: null
};

class Datepicker extends Component {

	constructor(props) {

		super(props);

		this.state = initialState;

	}

	handleDateChange = timeUnit => (e) => {

		const { value } = e.target;

		this.setState({ [timeUnit]: value });

	}

	isValidDate() {

		const { day, month, year } = this.state;

		return day && month && year;

	}

	render() {

		const validDate = this.isValidDate();

		return (

			<div className={className}>

				<div className={`${className}__inputs`}>

					<TextInput placeholder="DD" maxLength={2} onChange={this.handleDateChange('day')} />

					<TextInput placeholder="MM" maxLength={2} onChange={this.handleDateChange('month')} />

					<TextInput placeholder="YYYY" maxLength={4} onChange={this.handleDateChange('year')} />

				</div>

				<button type="button" disabled={!validDate}>Submit</button>

			</div>

		);

	}

}

export default Datepicker;
