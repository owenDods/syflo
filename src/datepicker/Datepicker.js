import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../textInput/TextInput';

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

	handleDateChange = (timeUnit, maxLength) => (e) => {

		const { value = '' } = e.target;

		this.setState({ [timeUnit]: value.slice(0, maxLength) });

	}

	isValidDate() {

		const { day, month, year } = this.state;

		return day && month && year;

	}

	render() {

		const validDate = this.isValidDate();
		const { day, month, year } = this.state;

		return (

			<div className={className}>

				<div className={`${className}__inputs`}>

					<TextInput
						label="DD"
						maxLength={2}
						onChange={this.handleDateChange('day', 2)}
						value={day}
						number
						focus
					/>

					<TextInput
						label="MM"
						maxLength={2}
						onChange={this.handleDateChange('month', 2)}
						value={month}
						number
					/>

					<TextInput
						label="YYYY"
						maxLength={4}
						onChange={this.handleDateChange('year', 4)}
						value={year}
						number
					/>

				</div>

				<button
					type="button"
					disabled={!validDate}
					onClick={() => this.props.updateChoice(this.state)}
				>
					Submit
				</button>

			</div>

		);

	}

}

Datepicker.propTypes = {
	updateChoice: PropTypes.func
};

export default Datepicker;
