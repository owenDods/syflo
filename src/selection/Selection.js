import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import map from 'lodash/map';

import SelectionChoice from './SelectionChoice';
import SelectionIndex from './SelectionIndex';

export const className = 'selection';

export default ({ choices = [], name }) => {

	const choicesContent = map(choices, ({ label, options }, i) => (

		<SelectionChoice
			key={`${className}-${name}-${i}`}
			label={label}
			options={options}
			name={name}
		/>

	));

	return (

		<div className={className}>

			<SelectionIndex name={name} choicesLength={choices.length} />

			{choicesContent}

		</div>

	);

}
