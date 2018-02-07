import React from 'react';
import PropTypes from 'prop-types';

import ProgressCircle from '../progressCircle/ProgressCircle';

import getAge from '../utils/getAge';

import config from '../config';

export const className = 'initialSelectionResult';

const InitialSelectionResult = ({ selectionChoices }) => {

	const { ageData } = config;
	const age = getAge(selectionChoices[1]);
	const maxAge = ageData.length - 1;
	const ageDataSegment = ageData[Math.min(age, maxAge)];
	const ageStats = ageDataSegment[selectionChoices[0].toLowerCase()];
	const { yearsLeft } = ageStats;
	const yearsLeftFloat = parseFloat(yearsLeft);
	const subLabelText = `(Based on data for the maximum age of ${maxAge})`;

	return (

		<div className={className}>

			<ProgressCircle
				delayed
				total={yearsLeftFloat + age}
				portion={age}
				label="of your life has been lived"
				subLabel={(age > maxAge) ? subLabelText : ''}
			/>

		</div>

	);

};

InitialSelectionResult.propTypes = {
	selectionChoices: PropTypes.arrayOf(PropTypes.string)
};

export default InitialSelectionResult;
