
function action(type, payload={}) {
    return {type, ...payload}
}

export const DELETE_LIST = 'DELETE_LIST';
export const UPDATE_LIST = 'UPDATE_LIST';
export const ADD_LIST = 'ADD_LIST';
export const TOGGLE_SHOW_CARD_DETAILS_MODEL = 'TOGGLE_SHOW_CARD_DETAILS_MODEL';

export const addList = (data) => action(ADD_LIST, data);
export const updateList = (data) => action(UPDATE_LIST, data);
export const deleteList = (data) => action(DELETE_LIST, data);
export const toggleShowCardDetailsModel = (data) => action(TOGGLE_SHOW_CARD_DETAILS_MODEL, data);
