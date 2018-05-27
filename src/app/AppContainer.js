import { connect } from 'react-redux';

import { appTitleSplashToggle } from './AppActions';
import App from './App';

const mapStateToProps = (state) => {

	const { app } = state;
	const { titleSplashVisible, initialSelectionComplete } = app;

	return {
		titleSplashVisible,
		initialSelectionComplete
	};

};

const mapDispatchToProps = dispatch => ({
	appTitleSplashToggle: visible => dispatch(appTitleSplashToggle(visible))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
