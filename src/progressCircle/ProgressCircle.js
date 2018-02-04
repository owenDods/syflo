import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import { CSSTransitionGroup } from 'react-transition-group';

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

		const { labelNumber, label } = this.props;
		const { applyAngles, leftAngle, rightAngle } = this.state;
		const { transitionTime } = config;
		const styleClass = applyAngles ? `${className} ${className}--angles` : className;
		const leftStyle = applyAngles ? { transform: `rotate(${leftAngle}deg)` } : null;
		const rightStyle = applyAngles ? { transform: `rotate(${rightAngle}deg)` } : null;
		const counter = (

			<CountUp
				start={0}
				end={labelNumber}
				duration={0.3}
				className={`${className}__counter`}
			/>

		);
		const labelContent = (

			<label key={0}>{label}</label>

		);

		return (

			<div className={styleClass}>

				<div className={`${className}__left`}>

					<div className={`${className}__innerLeft`} style={leftStyle} />

					<div className={`${className}__innerLeftBackground`} />

				</div>

				<div className={`${className}__right`}>

					<div className={`${className}__innerRight`} style={rightStyle} />

					<div className={`${className}__innerRightBackground`} />

				</div>

				{applyAngles ? counter : null}

				<CSSTransitionGroup
					className={`${className}__label`}
					transitionName={`${className}__label`}
					transitionEnterTimeout={transitionTime}
					transitionLeaveTimeout={transitionTime}
				>

					{applyAngles ? labelContent : null}

				</CSSTransitionGroup>

			</div>

		);

	}

}

ProgressCircle.propTypes = {
	delayed: PropTypes.bool,
	total: PropTypes.number,
	portion: PropTypes.number,
	label: PropTypes.string,
	labelNumber: PropTypes.number
};

export default ProgressCircle;
