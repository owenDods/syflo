import React from 'react';
import PropTypes from 'prop-types';

export const className = 'textInput';

const TextInput = ({ placeholder }) => (

	<div className={className}>

		<input type="text" placeholder={placeholder} />

	</div>

);

TextInput.propTypes = {
	placeholder: PropTypes.string
};

export default TextInput;
