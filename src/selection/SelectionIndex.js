import React from 'react';

export const className = 'selectionIndex';

export default ({ name, optionsLength = 0, index }) => {

	const indexDot = i => {

		const key = `${className}-${name}-${i}`;

		return (

			<div key={key} />

		);

	};
	const indexContent = [];

	while(indexContent.length < optionsLength) {

		indexContent.push(indexDot(indexContent.length));

	}

	return (

		<div className={className}>

			{indexContent}

		</div>

	);

}
