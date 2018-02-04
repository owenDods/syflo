import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import InitialSelection from '../initialSelection/InitialSelection';

import config from '../config';

export const className = 'content';

const Content = ({ titleSplashVisible }) => {

	const routes = (

		<Route exact path="/" component={InitialSelection} />

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
				>

					{titleSplashVisible ? null : routes}

				</CSSTransitionGroup>

			</div>

		</Router>

	);

};

Content.propTypes = {
	titleSplashVisible: PropTypes.bool
};

export default Content;
