import React from 'react';

import TextInput from '../textInput/TextInput';

export const className = 'datepicker';

const Datepicker = () => {

	return (

		<div className={className}>

			<div className={`${className}__inputs`}>

				<TextInput placeholder="DD" maxLength={2} />

				<TextInput placeholder="MM" maxLength={2} />

				<TextInput placeholder="YYYY" maxLength={4} />

			</div>

			<button type="button">Submit</button>

		</div>

	);

};

export default Datepicker;
