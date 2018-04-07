import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

export const className = 'progressGrid';
export const initialState = {
	active: false
};
export const defaultTotal = 100;
export const defaultCount = 100;

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
		const { weeksInAYear } = config;

		const weeksCount = count * weeksInAYear;
		const totalWeeks = Math.ceil(total * weeksInAYear);

		return `${preLabel} ${weeksCount} out of ${totalWeeks} ${postLabel}`;

	}

	getTotal() {

		const { total = defaultTotal } = this.props;

		return Math.max(Math.min(total, defaultTotal), 0);

	}

	getCount() {

		const { count = defaultCount } = this.props;

		return Math.max(Math.min(count, defaultCount), 0);

	}

	render() {

		const total = this.getTotal();
		const count = this.getCount();
		const { active } = this.state;
		const styleClass = active ? `${className} ${className}--active` : className;
		const gridCells = [];
		const { weeksInAYear } = config;
		let gridIterations = 0;

		while (gridIterations < (total * weeksInAYear)) {

			const isActive = gridIterations <= (count * weeksInAYear) && (count !== 0);
			let cellClass = `${className}__cell`;
			cellClass = isActive ? `${cellClass} ${cellClass}--active` : cellClass;
			const style = isActive ? { transitionDelay: `${(0.0025 * gridIterations)}s` } : {};

			gridCells.push(<div key={`${className}-${gridIterations}`} className={cellClass} style={style} />);

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
	postLabel: PropTypes.string
};

export default ProgressGrid;
