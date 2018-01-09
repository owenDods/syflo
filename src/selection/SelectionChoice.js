import React from 'react';
import map from 'lodash/map';

export const className = 'selectionChoice';

export default ({ label, options, name, onClick }) => {

	const choiceContent = map(options, (option, i) => (

		<div key={`${className}-${name}-${i}`} onClick={onClick}>

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

}
