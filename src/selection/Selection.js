import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import SelectionChoice from './SelectionChoice';
import SelectionIndex from './SelectionIndex';

export const className = 'selection';

const Selection = ({ options = [], name, selectionIndex, selectionUpdateChoiceIndex }) => {

	const choicesContent = options.length ? (

		<SelectionChoice
			key={`${className}-${name}-${selectionIndex}`}
			label={options[selectionIndex].label}
			options={options[selectionIndex].choices}
			name={name}
			onClick={() => selectionUpdateChoiceIndex(selectionIndex + 1)}
		/>

	) : null;

	return (

		<div className={className}>

			<SelectionIndex name={name} optionsLength={options.length} index={selectionIndex} />

			<CSSTransitionGroup
				className={`${className}__body`}
				transitionName={`${className}__body`}
				transitionEnterTimeout={600}
				transitionLeaveTimeout={300}
			>

				{choicesContent}

			</CSSTransitionGroup>

		</div>

	);

};

Selection.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		choices: PropTypes.arrayOf(PropTypes.string)
	})),
	name: PropTypes.string,
	selectionIndex: PropTypes.number,
	selectionUpdateChoiceIndex: PropTypes.func
};

export default Selection;
