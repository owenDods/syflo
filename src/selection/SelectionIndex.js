import React from 'react';

export const className = 'selectionIndex';

export default ({ name, choicesLength = 0, index }) => {

	const indexDot = i => {

		const key = `${className}-${name}-${i}`;

		return (

			<div key={key} />

		);

	};
	const indexContent = [];

	while(indexContent.length < choicesLength) {

		indexContent.push(indexDot(indexContent.length));

	}

	return (

		<div className={className}>

			{indexContent}

		</div>

	);

}
