import React from 'react';
import PropTypes from 'prop-types';

export const className = 'textInput';

const TextInput = ({ label, placeholder, maxLength, onChange, number, value }) => (

	<div className={className}>

		<label>{label}</label>

		<input
			type={number ? 'number' : 'text'}
			maxLength={maxLength}
			placeholder={placeholder}
			onChange={onChange}
			value={value}
		/>

	</div>

);

TextInput.propTypes = {
	label: PropTypes.string,
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func,
	number: PropTypes.bool,
	value: PropTypes.string
};

export default TextInput;
