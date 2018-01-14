import React from 'react';

import TextInput from '../textInput/TextInput';

export const className = 'datepicker';

const Datepicker = () => {

	return (

		<div className={className}>

			<TextInput placeholder="DD" />

			<TextInput placeholder="MM" />

			<TextInput placeholder="YYYY" />

		</div>

	);

};

export default Datepicker;
