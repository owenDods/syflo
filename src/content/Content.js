import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import SelectionContainer from '../selection/SelectionContainer';

export const className = 'content';

const Content = ({ titleSplashVisible }) => {

	const options = [
		{
			label: 'What is your sex?',
			choices: [ 'Male', 'Female' ]
		},
		{
			label: 'What is your sex????',
			choices: [ 'Bloke', 'Chick' ]
		}
	];
	const initialSelection = (

		<SelectionContainer name="initial" options={options} />

	);

	return (

		<div className={className}>

			<CSSTransitionGroup
				className={`${className}__splashTitle`}
				transitionName={`${className}__splashTitle`}
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}
			>

				{titleSplashVisible ? (<h1>SYFLO</h1>) : null}

			</CSSTransitionGroup>

			<CSSTransitionGroup
				className={`${className}__body`}
				transitionName={`${className}__body`}
				transitionEnterTimeout={600}
				transitionLeaveTimeout={300}
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
