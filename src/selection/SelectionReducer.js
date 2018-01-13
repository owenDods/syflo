import {
	SELECTION_UPDATE_CHOICE_COUNT,
	SELECTION_UPDATE_CHOICE_INDEX,
	SELECTION_UPDATE_CHOICE
} from './SelectionActions';

export const initialState = {
	selectionChoices: [],
	selectionIndex: 0
};

const selectionChoices = (state = initialState, action) => {

	switch (action.type) {

		case SELECTION_UPDATE_CHOICE_COUNT: {

			if (!state.selectionChoices.length) {

				let arrayLength = action.count;
				const selectionChoices = [];

				while(arrayLength--) {

					selectionChoices.push(null);

				}

				return Object.assign({}, state, { selectionChoices });

			}

			return Object.assign(state);

		}

		case SELECTION_UPDATE_CHOICE_INDEX:

			return Object.assign({}, state, {
				selectionIndex: action.index
			});

		case SELECTION_UPDATE_CHOICE:

			return Object.assign(state);

		default:

			return state;

	}

};

export default (state = {}, action) => {

	switch (action.type) {

		case SELECTION_UPDATE_CHOICE_COUNT:
		case SELECTION_UPDATE_CHOICE_INDEX:
		case SELECTION_UPDATE_CHOICE:

			return Object.assign({}, state, {
				[action.name]: selectionChoices(state[action.name], action)
			});

		default:

			return state;

	}

};
