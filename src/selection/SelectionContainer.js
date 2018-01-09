import { connect } from 'react-redux';

import {
	selectionUpdateChoiceCount,
	selectionUpdateChoiceIndex,
	selectionUpdateChoice
} from './SelectionActions';
import Selection from './Selection';

const mapStateToProps = (state, ownProps) => {

	const { name } = ownProps;
	const { selection = {} } = state;
	const { selectionChoices, selectionIndex = 0 } = selection[name] || {};

	return {
		selectionChoices,
		selectionIndex
	};

};

const mapDispatchToProps = (dispatch, ownProps) => {

	const { name } = ownProps;

	return {
		selectionUpdateChoiceCount: count => dispatch(selectionUpdateChoiceCount(name, count)),
		selectionUpdateChoiceIndex: index => dispatch(selectionUpdateChoiceIndex(name, index)),
		selectionUpdateChoice: (index, choice) => dispatch(selectionUpdateChoice(name, index, choice))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
