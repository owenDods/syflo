import React from 'react';
import PropTypes from 'prop-types';

import Datepicker from '../datepicker/Datepicker';
import SelectionContainer from '../selection/SelectionContainer';
import InitialSelectionResult from './InitialSelectionResult';

export const options = [
	{
		label: 'What is your sex?',
		choices: [ 'Male', 'Female' ]
	},
	{
		label: 'What is your date of birth?',
		component: Datepicker
	}
];

const InitialSelection = ({ finishInitialSelection }) => (

	<SelectionContainer name="initial" options={options} result={(<InitialSelectionResult finish={finishInitialSelection} />)} />

);

InitialSelection.propTypes = {
	finishInitialSelection: PropTypes.func
};

export default InitialSelection;
