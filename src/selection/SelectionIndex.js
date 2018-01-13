import React from 'react';
import PropTypes from 'prop-types';

export const className = 'selectionIndex';

const SelectionIndex = ({ name, optionsLength = 0, index }) => {

	const indexDot = (i) => {

		const key = `${className}-${name}-${i}`;
		let styleClass = `${className}__dot`;
		styleClass = index === i ? `${styleClass} ${styleClass}--active` : styleClass;
		styleClass = i < index ? `${styleClass} ${styleClass}--completed` : styleClass;

		return (

			<div key={key} className={styleClass}>

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
