import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';

export const className = 'progressGrid';
export const initialState = {
	active: false
};

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

		const { total = 100, count = 100, preLabel, postLabel } = this.props;
		const { weeksInAYear } = config;

		const weeksCount = count * weeksInAYear;
		const totalWeeks = Math.ceil(total * weeksInAYear);

		return `${preLabel} ${weeksCount} out of ${totalWeeks} ${postLabel}`;

	}

	render() {

		const { total = 100, count = 100 } = this.props;
		const { active } = this.state;
		const styleClass = active ? `${className} ${className}--active` : className;
		const gridCells = [];
		const { weeksInAYear } = config;
		let gridIterations = 0;

		while (gridIterations < (total * weeksInAYear)) {

			const isActive = gridIterations <= (count * weeksInAYear);
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
