
function action(type, payload={}) {
    return {type, ...payload}
}

export const DELETE_LIST = 'DELETE_LIST';
export const UPDATE_LIST_TITLE = 'UPDATE_LIST_TITLE';
export const ADD_LIST = 'ADD_LIST';
export const TOGGLE_SHOW_CARD_DETAILS_MODEL = 'TOGGLE_SHOW_CARD_DETAILS_MODEL';

export const addNewList = (data) => action(ADD_LIST, data);
export const updateListTitle = (data) => action(UPDATE_LIST_TITLE, data);
export const deleteListById = (data) => action(DELETE_LIST, data);
export const toggleShowCardDetailsModel = (data) => action(TOGGLE_SHOW_CARD_DETAILS_MODEL, data);
