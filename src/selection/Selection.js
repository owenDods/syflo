import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import map from 'lodash/map';

import SelectionChoice from './SelectionChoice';
import SelectionIndex from './SelectionIndex';

export const className = 'selection';

export default ({ options = [], name, selectionIndex, selectionUpdateChoiceIndex }) => {

	const choicesContent = map(options, ({ label, choices }, i) => (

		<SelectionChoice
			key={`${className}-${name}-${i}`}
			label={label}
			options={choices}
			name={name}
			active={selectionIndex === i}
			onClick={() => selectionUpdateChoiceIndex(i + 1)}
		/>

	));

	return (

		<div className={className}>

			<SelectionIndex name={name} optionsLength={options.length} />

			{choicesContent}

		</div>

	);

}
