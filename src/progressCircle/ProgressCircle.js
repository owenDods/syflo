import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import config from '../config';

export const className = 'progressCircle';
export const initialState = {
	applyAngles: false,
	leftAngle: 0,
	rightAngle: 0
};

class ProgressCircle extends Component {

	constructor(props) {

		super(props);

		this.state = initialState;

	}

	componentDidMount() {

		if (this.props.delayed) {

			const { transitionTime } = config;

			setTimeout(this.setDegrees, (transitionTime * 2));

		} else {

			this.setDegrees();

		}

	}

	getPercentage() {

		const { total, portion } = this.props;

		return portion / total;

	}

	getAngles() {

		const percentage = this.getPercentage();
		const degrees = 360 * percentage;
		const rightAngle = Math.min(degrees, 180) - 180;
		const leftAngle = Math.min(Math.max((degrees - 180), 0), 180) - 180;

		return { leftAngle, rightAngle };

	}

	setDegrees = () => {

		const readyState = Object.assign({}, { applyAngles: true }, this.getAngles());

		this.setState(readyState);

	}

	render() {

		const { portion } = this.props;
		const { applyAngles, leftAngle, rightAngle } = this.state;
		const leftStyle = applyAngles ? { transform: `rotate(${leftAngle}deg)` } : null;
		const rightStyle = applyAngles ? { transform: `rotate(${rightAngle}deg)` } : null;
		const counter = (

			<CountUp
				start={0}
				end={portion}
				duration={0.3}
				className={`${className}__counter`}
			/>

		);

		return (

			<div className={className}>

				<div className={`${className}__left`}>

					<div className={`${className}__innerLeft`} style={leftStyle} />

				</div>

				<div className={`${className}__right`}>

					<div className={`${className}__innerRight`} style={rightStyle} />

				</div>

				{applyAngles ? counter : null}

			</div>

		);

	}

}

ProgressCircle.propTypes = {
	delayed: PropTypes.bool,
	total: PropTypes.number,
	portion: PropTypes.number
};

export default ProgressCircle;
