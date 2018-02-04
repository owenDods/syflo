import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import SelectionChoice from './SelectionChoice';
import SelectionIndex from './SelectionIndex';

import config from '../config';

export const className = 'selection';

class Selection extends Component {

	componentDidMount() {

		const { selectionUpdateChoiceCount, options = [] } = this.props;

		selectionUpdateChoiceCount(options.length);

	}

	handleChoiceSelect = (option) => {

		const { selectionIndex, selectionUpdateChoiceIndex, selectionUpdateChoice } = this.props;

		selectionUpdateChoiceIndex(selectionIndex + 1);

		selectionUpdateChoice(selectionIndex, option);

	}

	render() {

		const { options = [], name, selectionIndex, result: Result, selectionChoices } = this.props;
		const choicesContent = options.length && selectionIndex < options.length ? (

			<SelectionChoice
				key={`${className}-${name}-${selectionIndex}`}
				label={options[selectionIndex].label}
				options={options[selectionIndex].choices}
				name={name}
				updateChoice={this.handleChoiceSelect}
				component={options[selectionIndex].component}
			/>

		) : <Result selectionChoices={selectionChoices} />;
		const { transitionTime } = config;

		return (

			<div className={className}>

				<SelectionIndex name={name} optionsLength={options.length} index={selectionIndex} />

				<CSSTransitionGroup
					className={`${className}__body`}
					transitionName={`${className}__body`}
					transitionEnterTimeout={(transitionTime * 2)}
					transitionLeaveTimeout={transitionTime}
				>

					{choicesContent}

				</CSSTransitionGroup>

			</div>

		);

	}

}

Selection.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
		label: PropTypes.string,
		choices: PropTypes.arrayOf(PropTypes.string)
	})),
	name: PropTypes.string,
	selectionIndex: PropTypes.number,
	selectionUpdateChoiceIndex: PropTypes.func,
	selectionUpdateChoiceCount: PropTypes.func.isRequired,
	selectionUpdateChoice: PropTypes.func.isRequired,
	result: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func
	]),
	selectionChoices: PropTypes.arrayOf(PropTypes.string)
};

export default Selection;
