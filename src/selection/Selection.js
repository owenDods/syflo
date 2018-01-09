import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import map from 'lodash/map';

import SelectionChoice from './SelectionChoice';
import SelectionIndex from './SelectionIndex';

export const className = 'selection';

export default ({ options = [], name, selectionIndex, selectionUpdateChoiceIndex }) => {

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

			<SelectionIndex name={name} optionsLength={options.length} />

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

}
