import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const className = 'textInput';

class TextInput extends Component {

	componentDidMount() {

		if (this.props.focus) {

			this.input.focus();

		}

	}

	render() {

		const { label, placeholder, maxLength, onChange, number, value } = this.props;

		return (

			<div className={className}>

				<label>{label}</label>

				<input
					type={number ? 'number' : 'text'}
					maxLength={maxLength}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					ref={el => this.input = el}
				/>

			</div>

		);

	}

}

TextInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func,
	number: PropTypes.bool,
	value: PropTypes.string,
	focus: PropTypes.bool
};

export default TextInput;
