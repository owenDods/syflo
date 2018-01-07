import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Selection from '../selection/Selection';

export const className = 'content';

export default ({ titleSplashVisible }) => {

	const choices = [
		{
			label: 'What is your sex?',
			options: [ 'Male', 'Female' ]
		}
	];
	const initialSelection = (

		<Selection choices={choices} />

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

}
