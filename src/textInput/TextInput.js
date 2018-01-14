import React from 'react';
import PropTypes from 'prop-types';

export const className = 'textInput';

const TextInput = ({ placeholder, maxLength, onChange }) => (

	<div className={className}>

		<input type="text" placeholder={placeholder} maxLength={maxLength} onChange={onChange} />

	</div>

);

TextInput.propTypes = {
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func
};

export default TextInput;
