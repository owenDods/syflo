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
	const ageBroughtWithinRange = Math.min(age, maxAge);
	const ageDataSegment = ageData[ageBroughtWithinRange];
	const ageStats = ageDataSegment[selectionChoices[0].toLowerCase()];
	const { yearsLeft } = ageStats;
	const yearsLeftFloat = parseFloat(yearsLeft);
	const ageExceedsMax = age > maxAge;
	const minAge = 0;
	const subLabelText = ageExceedsMax ? `(Based on data for the maximum age of ${maxAge})` : `(Based on data for the minimum age of ${minAge})`;

	return (

		<div className={className}>

			<ProgressCircle
				delayed
				total={yearsLeftFloat + age}
				portion={age}
				label="of your life has been lived"
				subLabel={ageExceedsMax || (age === minAge) ? subLabelText : ''}
			/>

		</div>

	);

};

InitialSelectionResult.propTypes = {
	selectionChoices: PropTypes.arrayOf(PropTypes.string)
};

export default InitialSelectionResult;
