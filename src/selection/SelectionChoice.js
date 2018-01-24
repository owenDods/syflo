import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

export const className = 'selectionChoice';

const SelectionChoice = ({ label, options, name, updateChoice, component: Component }) => {

	const choiceContent = Component ? <Component updateChoice={updateChoice} /> :
		map(options, (option, i) => (

			<div key={`${className}-${name}-${i}`} onClick={() => updateChoice(option)} className={`${className}__choice`}>

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
	updateChoice: PropTypes.func.isRequired,
	component: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func
	])
};

export default SelectionChoice;
