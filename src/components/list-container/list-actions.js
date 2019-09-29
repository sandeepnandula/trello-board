
function action(type, payload={}) {
    return {type, ...payload}
}

export const DELETE_LIST = 'DELETE_LIST';
export const UPDATE_LIST_TITLE = 'UPDATE_LIST_TITLE';
export const ADD_LIST = 'ADD_LIST';
export const TOGGLE_SHOW_CARD_DETAILS_MODEL = 'TOGGLE_SHOW_CARD_DETAILS_MODEL';

/**
 * 
 * @param { listId, title }
 */
export const addNewList = (data) => action(ADD_LIST, data);
/**
 * 
 * @param { listId, title }
 */
export const updateListTitle = (data) => action(UPDATE_LIST_TITLE, data);

/**
 * 
 * @param { listId }
 */
export const deleteListById = (data) => action(DELETE_LIST, data);

/**
 * 
 * @param { cardId, listId } | These are sending to store the currently opened card details
 */
export const toggleShowCardDetailsModel = (data) => action(TOGGLE_SHOW_CARD_DETAILS_MODEL, data);
