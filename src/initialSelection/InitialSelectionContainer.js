import { connect } from 'react-redux';

import { appFinishInitialSelection } from '../app/AppActions';
import InitialSelection from './InitialSelection';

const mapDispatchToProps = dispatch => ({
	finishInitialSelection: () => dispatch(appFinishInitialSelection())
});

export default connect(null, mapDispatchToProps)(InitialSelection);
