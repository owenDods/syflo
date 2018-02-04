import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

export const className = 'progressCircle';
export const initialState = {
	complete: false
};

class ProgressCircle extends Component {

	constructor(props) {

		super(props);

		this.state = initialState;

	}

	componentDidMount() {

		if (this.props.delayed) {

			const { transitionTime } = config;

			setTimeout(this.setComplete, (transitionTime * 2));

		} else {

			this.setComplete();

		}

	}

	setComplete = () => {

		this.setState({ complete: true });

	}

	render() {

		const { complete } = this.state;
		const styleClass = complete ? `${className} ${className}--complete` : className;

		return (

			<div className={styleClass}>

				<div className={`${className}__fill`} />

			</div>

		);

	}

}

ProgressCircle.propTypes = {
	delayed: PropTypes.bool
};

export default ProgressCircle;
