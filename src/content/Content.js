import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import InitialSelectionContainer from '../initialSelection/InitialSelectionContainer';

import config from '../config';

export const className = 'content';

const Content = ({ titleSplashVisible, initialSelectionComplete }) => {

	const routes = (

		<Route exact path="/" component={initialSelectionComplete ? null : InitialSelectionContainer} />

	);
	const { transitionTime } = config;

	return (

		<Router>

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
					component="div"
				>

					{titleSplashVisible ? null : routes}

				</CSSTransitionGroup>

			</div>

		</Router>

	);

};

Content.propTypes = {
	titleSplashVisible: PropTypes.bool,
	initialSelectionComplete: PropTypes.bool
};

export default Content;
