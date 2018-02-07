import React from 'react';
import PropTypes from 'prop-types';

import ProgressCircle from '../progressCircle/ProgressCircle';

import getAge from '../utils/getAge';

import config from '../config';

export const className = 'initialSelectionResult';

const InitialSelectionResult = ({ selectionChoices }) => {

	const { ageData } = config;
	const age = getAge(selectionChoices[1]);
	const ageDataSegment = ageData[Math.min(age, (ageData.length - 1))];
	const ageStats = ageDataSegment[selectionChoices[0].toLowerCase()];
	const { yearsLeft } = ageStats;
	const yearsLeftFloat = parseFloat(yearsLeft);

	return (

		<div className={className}>

			<ProgressCircle
				delayed
				total={yearsLeftFloat + age}
				portion={age}
				label="of your life has been lived"
			/>

		</div>

	);

};

InitialSelectionResult.propTypes = {
	selectionChoices: PropTypes.arrayOf(PropTypes.string)
};

export default InitialSelectionResult;
