import React from 'react';
import map from 'lodash/map';

export const className = 'selectionChoice';

export default ({ label, options, name, active, onClick }) => {

	const styleClass = active ? `${className} ${className}--active` : className;
	const choiceContent = map(options, (option, i) => (

		<div key={`${className}-${name}-${i}`} onClick={onClick}>

			<span>{option}</span>

		</div>

	));

	return (

		<div className={styleClass}>

			<label>

				<span>{label}</span>

			</label>

			<div className={`${className}__content`}>

				{choiceContent}

			</div>

		</div>

	);

}
