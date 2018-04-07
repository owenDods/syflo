import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

export const className = 'selectionChoice';
export const initialState = {
	choiceMade: false
};

class SelectionChoice extends Component {

	constructor(props) {

		super(props);

		this.state = initialState;

	}

	handleChoiceSelection = option => () => {

		const { updateChoice } = this.props;
		const { choiceMade } = this.state;

		if (!choiceMade) {

			this.setState({ choiceMade: true }, () => updateChoice(option));

		}

	}

	render() {

		const { label, options, name, component: CustomComponent } = this.props;
		const choiceContent = CustomComponent ? (

			<CustomComponent updateChoice={this.handleChoiceSelection} />

		) : map(options, (option, i) => (

			<div key={`${className}-${name}-${i}`} onClick={this.handleChoiceSelection(option)} className={`${className}__choice`}>

				<span>{option}</span>

			</div>

		));

		return (

			<div className={className}>

				<label>

					<span>{label}</span>

				</label>

				<div className={`${className}__content`}>

					{choiceContent}

				</div>

			</div>

		);

	}

}

SelectionChoice.propTypes = {
	label: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.string),
	name: PropTypes.string,
	updateChoice: PropTypes.func.isRequired,
	component: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.func
	])
};

export default SelectionChoice;
