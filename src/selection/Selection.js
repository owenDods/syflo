import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import SelectionChoice from './SelectionChoice';
import SelectionIndex from './SelectionIndex';

export const className = 'selection';

class Selection extends Component {

	componentDidMount() {

		const { selectionUpdateChoiceCount, options = [] } = this.props;

		selectionUpdateChoiceCount(options.length);

	}

	handleChoiceSelect = (option) => {

		console.log(option);

		const { selectionIndex, selectionUpdateChoiceIndex } = this.props;

		selectionUpdateChoiceIndex(selectionIndex + 1);

	}

	render() {

		const { options = [], name, selectionIndex, selectionUpdateChoiceIndex } = this.props;
		const choicesContent = options.length && selectionIndex < options.length ? (

			<SelectionChoice
				key={`${className}-${name}-${selectionIndex}`}
				label={options[selectionIndex].label}
				options={options[selectionIndex].choices}
				name={name}
				onClick={this.handleChoiceSelect}
			/>

		) : null;

		return (

			<div className={className}>

				<SelectionIndex name={name} optionsLength={options.length} index={selectionIndex} />

				<CSSTransitionGroup
					className={`${className}__body`}
					transitionName={`${className}__body`}
					transitionEnterTimeout={600}
					transitionLeaveTimeout={300}
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
	selectionUpdateChoiceIndex: PropTypes.func
};

export default Selection;
