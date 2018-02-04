import React from 'react';

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

const InitialSelection = () => (

	<SelectionContainer name="initial" options={options} result={InitialSelectionResult} />

);

export default InitialSelection;
