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

		const { label, placeholder, maxLength, onChange, value } = this.props;
		const inputRef = (el) => {

			this.input = el;

		};

		return (

			<div className={className}>

				<label>{label}</label>

				<input
					type="text"
					maxLength={maxLength}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					ref={inputRef}
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
	value: PropTypes.string,
	focus: PropTypes.bool
};

export default TextInput;
