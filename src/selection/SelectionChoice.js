import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

export const className = 'selectionChoice';

const SelectionChoice = ({ label, options, name, onClick }) => {

	const choiceContent = map(options, (option, i) => (

		<div key={`${className}-${name}-${i}`} onClick={() => onClick(option)}>

			<span>{option}</span>

		</div>

	));

	return (

		<div className={className}>

			<label>

				<span>{label}</span>

			</label>

			<div className={`${className}__content`}>

				{choiceContent}

			</div>

		</div>

	);

};

SelectionChoice.propTypes = {
	label: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string),
	name: PropTypes.string,
	onClick: PropTypes.func.isRequired
};

export default SelectionChoice;
