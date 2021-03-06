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
				const newSelectionChoices = [];

				while (arrayLength) {

					newSelectionChoices.push(null);

					arrayLength--;

				}

				return {
					...state,
					selectionChoices: newSelectionChoices
				};

			}

			return state;

		}

		case SELECTION_UPDATE_CHOICE_INDEX:

			return {
				...state,
				selectionIndex: action.index
			};

		case SELECTION_UPDATE_CHOICE: {

			const newSelectionChoices = state.selectionChoices.slice();
			newSelectionChoices[action.index] = action.choice;

			return {
				...state,
				selectionChoices: newSelectionChoices
			};

		}

		default:

			return state;

	}

};

export default (state = {}, action) => {

	switch (action.type) {

		case SELECTION_UPDATE_CHOICE_COUNT:
		case SELECTION_UPDATE_CHOICE_INDEX:
		case SELECTION_UPDATE_CHOICE:

			return {
				...state,
				[action.name]: selectionChoices(state[action.name], action)
			};

		default:

			return state;

	}

};
