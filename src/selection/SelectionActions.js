export const SELECTION_UPDATE_CHOICE_COUNT = 'SELECTION_UPDATE_CHOICE_COUNT';
export const SELECTION_UPDATE_CHOICE_INDEX = 'SELECTION_UPDATE_CHOICE_INDEX';
export const SELECTION_UPDATE_CHOICE = 'SELECTION_UPDATE_CHOICE';

export const selectionUpdateChoiceCount = (name, count) => ({
	type: SELECTION_UPDATE_CHOICE_COUNT,
	name,
	count
});

export const selectionUpdateChoiceIndex = (name, index) => ({
	type: SELECTION_UPDATE_CHOICE_INDEX,
	name,
	index
});

export const selectionUpdateChoice = (name, index, choice) => ({
	type: SELECTION_UPDATE_CHOICE,
	name,
	index,
	choice
});
