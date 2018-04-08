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

	getTotal() {

		const { total = defaultTotal } = this.props;

		return Math.max(Math.min(total, defaultTotal), 0);

	}

	getCount() {

		const { count = defaultCount } = this.props;

		return Math.max(Math.min(count, defaultCount), 0);

	}

	findMilestone(iteration) {

		const { milestones } = this.props;

		return find(milestones, ({ weeks }) => weeks === iteration);

	}

	render() {

		const total = this.getTotal();
		const count = this.getCount();
		const { active } = this.state;
		const styleClass = active ? `${className} ${className}--active` : className;
		const gridCells = [];

		let gridIterations = 0;

		while (gridIterations < total) {

			const isActive = (gridIterations <= count) && (count !== 0);
			const style = isActive ? { transitionDelay: `${(0.0025 * gridIterations)}s` } : {};
			const milestone = this.findMilestone(gridIterations);

			const label = milestone ? (

				<label>{milestone.age} year{milestone.age !== 1 ? 's' : ''}</label>

			) : null;

			const cellClass = `${className}__cell`;
			let cellStyleClass = isActive ? `${cellClass} ${cellClass}--active` : cellClass;
			cellStyleClass = milestone ? `${cellStyleClass} ${cellClass}--milestone` : cellStyleClass;
			const cellEl = (

				<div key={`${className}-${gridIterations}`} className={cellStyleClass} style={style}>

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

				<label className={`${className}__label`}>{this.getLabel()}</label>

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
	}))
};

export default ProgressGrid;
