import { APP_TITLE_SPLASH_TOGGLE } from './AppActions';

export const initialState = {
	titleSplashVisible: true
};

export default (state = initialState, action) => {

	switch (action.type) {

		case APP_TITLE_SPLASH_TOGGLE:

			return {
				titleSplashVisible: action.visible
			};

		default:

			return state;

	}

};
