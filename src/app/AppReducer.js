import { APP_TITLE_SPLASH_TOGGLE, APP_FINISH_INITIAL_SELECTION } from './AppActions';

export const initialState = {
	titleSplashVisible: true,
	initialSelectionComplete: false
};

export default (state = initialState, action) => {

	switch (action.type) {

		case APP_TITLE_SPLASH_TOGGLE:

			return {
				...state,
				titleSplashVisible: action.visible
			};

		case APP_FINISH_INITIAL_SELECTION:

			return {
				...state,
				initialSelectionComplete: true
			};

		default:

			return state;

	}

};
