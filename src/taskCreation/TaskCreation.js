import React from 'react';

import SelectionTextChoice from '../selection/SelectionTextChoice';
import SelectionContainer from '../selection/SelectionContainer';

export const options = [
	{
		label: 'What do you want to do?',
		component: SelectionTextChoice
	}
];

const TaskCreation = () => (

	<SelectionContainer name="task" options={options} result={(<SelectionTextChoice updateChoice={() => () => ''} />)} />

);

export default TaskCreation;
