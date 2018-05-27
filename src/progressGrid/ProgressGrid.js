import React, { Component } from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';

import config from '../config';

export const className = 'progressGrid';
export const initialState = {
	active: false
};
const { weeksInAYear } = config;
export const defaultTotal = 100 * weeksInAYear;
export const defaultCount = 100 * weeksInAYear;

class ProgressGrid extends Component {

	constructor(props) {

		super(props);

		this.state = initialState;

	}

	componentDidMount() {

		setTimeout(() => {

			this.setState({ active: true });

		}, (config.transitionTime * 3));

	}

	getLabel() {

		const { preLabel, postLabel } = this.props;
		const total = this.getTotal();
		const count = this.getCount();

		return `${preLabel} ${count} out of ${total} ${postLabel}`;

	}

	getButtonLabel() {

		const { buttonLabel } = this.props;
		const remainder = this.getRemainder();

		return `${buttonLabel} ${remainder}`;

	}

	getTotal() {

		const { total = defaultTotal } = this.props;

		return Math.max(Math.min(total, defaultTotal), 0);

	}

	getCount() {

		const { count = defaultCount } = this.props;

		return Math.max(Math.min(count, defaultCount), 0);

	}

	getRemainder() {

		const total = this.getTotal();
		const count = this.getCount();

		return total - count;

	}

	findMilestone(iteration) {

		const { milestones } = this.props;

		return find(milestones, ({ weeks }) => weeks === iteration);

	}

	render() {

		const { onButtonClick } = this.props;
		const { active } = this.state;

		const total = this.getTotal();
		const count = this.getCount();

		const styleClass = active ? `${className} ${className}--active` : className;

		const gridCells = [];

		let gridIterations = 0;

		while (gridIterations <= total) {

			const isActive = (gridIterations <= count) && (count !== 0);
			const style = isActive ? { transitionDelay: `${(0.0025 * gridIterations)}s` } : {};
			const milestone = this.findMilestone(gridIterations);

			const label = milestone ? (

				<label style={style}>{milestone.age} year{milestone.age !== 1 ? 's' : ''}</label>

			) : null;
			const labelLine = milestone ? (

				<div className={`${className}__labelLine`} style={style} />

			) : null;

			const cellClass = `${className}__cell`;
			let cellStyleClass = isActive ? `${cellClass} ${cellClass}--active` : cellClass;
			cellStyleClass = milestone ? `${cellStyleClass} ${cellClass}--milestone` : cellStyleClass;
			cellStyleClass = (gridIterations === count) && (count !== 0) ? `${cellStyleClass} ${cellClass}--latest` : cellStyleClass;

			const cellEl = (

				<div key={`${className}-${gridIterations}`} className={cellStyleClass} style={style}>

					{labelLine}

					{label}

				</div>

			);


			gridCells.push(cellEl);

			gridIterations++;

		}

		return (

			<div className={styleClass}>

				<div className={`${className}__grid`}>

					{gridCells}

				</div>

				<div className={`${className}__footer`}>

					<label className={`${className}__label`}>{this.getLabel()}</label>

					<button type="button" className={`${className}__button button--pulse`} onClick={onButtonClick}>{this.getButtonLabel()}</button>

				</div>

			</div>

		);

	}

}

ProgressGrid.propTypes = {
	total: PropTypes.number,
	count: PropTypes.number,
	preLabel: PropTypes.string,
	postLabel: PropTypes.string,
	milestones: PropTypes.arrayOf(PropTypes.shape({
		age: PropTypes.number,
		weeks: PropTypes.number
	})),
	buttonLabel: PropTypes.string,
	onButtonClick: PropTypes.func
};

export default ProgressGrid;
