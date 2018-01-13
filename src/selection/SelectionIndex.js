import React from 'react';
import PropTypes from 'prop-types';

export const className = 'selectionIndex';

const SelectionIndex = ({ name, optionsLength = 0, index }) => {

	const indexDot = (i) => {

		const key = `${className}-${name}-${i}`;

		return (

			<div key={key}>

				<div/>

			</div>

		);

	};
	const indexContent = [];

	while (indexContent.length < optionsLength) {

		indexContent.push(indexDot(indexContent.length));

	}

	return (

		<div className={className}>

			{indexContent}

		</div>

	);

};

SelectionIndex.propTypes = {
	name: PropTypes.string,
	optionsLength: PropTypes.number,
	index: PropTypes.number
};

export default SelectionIndex;
