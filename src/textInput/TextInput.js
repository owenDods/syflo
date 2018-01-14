import React from 'react';
import PropTypes from 'prop-types';

export const className = 'textInput';

const TextInput = ({ placeholder, maxLength }) => (

	<div className={className}>

		<input type="text" placeholder={placeholder} maxLength={maxLength} />

	</div>

);

TextInput.propTypes = {
	placeholder: PropTypes.string,
	maxLength: PropTypes.number
};

export default TextInput;
