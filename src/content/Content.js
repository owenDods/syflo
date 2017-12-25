import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export const className = 'content';

export default ({ titleSplashVisible }) => (

	<div className={className}>

		<CSSTransitionGroup
			className={`${className}__splashTitle`}
			transitionName={`${className}__splashTitle`}
			transitionEnterTimeout={300}
			transitionLeaveTimeout={300}
		>

			{titleSplashVisible ? (<h1>SYFLO</h1>) : null}

		</CSSTransitionGroup>

	</div>

);
