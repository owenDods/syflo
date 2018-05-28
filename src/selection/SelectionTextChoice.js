import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextInput from '../textInput/TextInput';

export const className = 'selectionTextChoice';
export const initialState = {
	value: ''
};

class SelectionTextChoice extends Component {

	constructor(props) {

		super(props);

		this.state = initialState;

	}

	handleTextChange = (e) => {

		const { value = '' } = e.target;

		this.setState({ value });

	}

	isValidText() {

		const { value = '' } = this.state;

		return !!value.length;

	}

	handleKeyPress = (e) => {

		if (e.key === 'Enter' && this.isValidText()) {

			this.props.updateChoice(this.state.value)();

		}

	}

	render() {

		const { value } = this.state;

		return (

			<div className={className} onKeyPress={this.handleKeyPress}>

				<TextInput value={value} onChange={this.handleTextChange} delayedFocus />

			</div>

		);

	}

}

SelectionTextChoice.propTypes = {
	updateChoice: PropTypes.func
};

export default SelectionTextChoice;
