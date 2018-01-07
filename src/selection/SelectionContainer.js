import { connect } from 'react-redux';

import {
	selectionUpdateChoiceCount,
	selectionUpdateChoiceIndex,
	selectionUpdateChoice
} from './SelectionActions';
import Selection from './Selection';

const mapStateToProps = (state, ownProps) => {

	const { name, choices } = ownProps;
	const { selection = {} } = state;
	const { selectionChoices, selectionIndex } = selection[name] || {};

	return {
		choices,
		selectionChoices,
		selectionIndex
	};

};

const mapDispatchToProps = (dispatch, ownProps) => {

	const { name } = ownProps;

	return {
		selectionUpdateChoiceCount: count => dispatch(selectionUpdateChoiceCount(name, count)),
		selectionUpdateChoiceIndex: index => dispatch(selectionUpdateChoice(name, index)),
		selectionUpdateChoice: (index, choice) => dispatch(selectionUpdateChoice(name, index, choice))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
