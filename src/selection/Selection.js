import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import map from 'lodash/map';

export const className = 'selection';

export default ({ choices, name }) => {

	const choicesContent = map(choices, ({ label, options }, i) => {

		const key = `${className}-${name}-${i}`;
		const choiceContent = map(options, (option, i2) => (

			<div key={`${key}-${i2}`}>

				<span>{option}</span>

			</div>

		));

		return (

			<div className={`${className}__choice`} key={key}>

				<label>

					<span>{label}</span>

				</label>

				<div className={`${className}__choiceContent`}>

					{choiceContent}

				</div>

			</div>

		);

	});

	return (

		<div className={className}>

			{choicesContent}

		</div>

	);

}
