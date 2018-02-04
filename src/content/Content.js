import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import Datepicker from '../datepicker/Datepicker';
import SelectionContainer from '../selection/SelectionContainer';

import config from '../config';

export const className = 'content';

const Content = ({ titleSplashVisible }) => {

	const options = [
		{
			label: 'What is your sex?',
			choices: [ 'Male', 'Female' ]
		},
		{
			label: 'What is your date of birth?',
			component: Datepicker
		}
	];
	const initialSelection = (

		<SelectionContainer name="initial" options={options} />

	);
	const { transitionTime } = config;

	return (

		<div className={className}>

			<CSSTransitionGroup
				className={`${className}__splashTitle`}
				transitionName={`${className}__splashTitle`}
				transitionEnterTimeout={transitionTime}
				transitionLeaveTimeout={transitionTime}
			>

				{titleSplashVisible ? (<h1>SYFLO</h1>) : null}

			</CSSTransitionGroup>

			<CSSTransitionGroup
				className={`${className}__body`}
				transitionName={`${className}__body`}
				transitionEnterTimeout={(transitionTime * 2)}
				transitionLeaveTimeout={transitionTime}
			>

				{titleSplashVisible ? null : initialSelection}

			</CSSTransitionGroup>

		</div>

	);

};

Content.propTypes = {
	titleSplashVisible: PropTypes.bool
};

export default Content;
