import React from 'react';
import PropTypes from 'prop-types';

import ProgressCircle from '../progressCircle/ProgressCircle';

import getAge from '../utils/getAge';

import config from '../config';

export const className = 'initialSelectionResult';

const InitialSelectionResult = ({ selectionChoices }) => {

	const { ageData } = config;
	const age = getAge(selectionChoices[1]);

	console.log(selectionChoices, ageData, ageData[age][selectionChoices[0].toLowerCase()]);

	return (

		<div className={className}>

			<ProgressCircle delayed />

		</div>

	);

};

InitialSelectionResult.propTypes = {
	selectionChoices: PropTypes.arrayOf(PropTypes.string)
};

export default InitialSelectionResult;
