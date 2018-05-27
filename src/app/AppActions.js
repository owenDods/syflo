export const APP_TITLE_SPLASH_TOGGLE = 'APP_TITLE_SPLASH_TOGGLE';
export const APP_FINISH_INITIAL_SELECTION = 'APP_FINISH_INITIAL_SELECTION';

export const appTitleSplashToggle = visible => ({
	type: APP_TITLE_SPLASH_TOGGLE,
	visible
});

export const appFinishInitialSelection = () => ({
	type: APP_FINISH_INITIAL_SELECTION
});
