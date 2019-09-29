
function action(type, payload={}) {
    return {type, ...payload}
}
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const UPDATE_CARD_TITLE = 'UPDATE_CARD_TITLE';
export const UPDATE_CARD_DESCRIPTION = 'UPDATE_CARD_DESCRIPTION';
export const ADD_COMMENTS_TO_CARD = 'ADD_COMMENTS_TO_CARD';
export const UPDATE_CARD_INDEX_WITH_IN_LIST = 'UPDATE_CARD_INDEX_WITH_IN_LIST';
export const UPDATE_CARD_INDEX_TO_DIFFERENT_LIST = 'UPDATE_CARD_INDEX_TO_DIFFERENT_LIST';

/**
 * 
 * @param {title, listId, cardId } 
 */
export const addNewCard = (data) => action(ADD_CARD, data);
/**
 * 
 * @param { title, cardId, listId } 
 */
export const updateCardTitle = (data) => action(UPDATE_CARD_TITLE, data);
/**
 * 
 * @param { cardId, listId } 
 */
export const deleteCardById = (data) => action(DELETE_CARD, data);
/**
 * 
 * @param { description, cardId, listId } 
 */
export const updateCardDescription = data => action(UPDATE_CARD_DESCRIPTION, data);
/**
 * 
 * @param { comment, cardId, listId }
 */
export const addCommentsToCard = data => action(ADD_COMMENTS_TO_CARD, data);
/**
 * 
 * @param { cardId, listId: sourceListId, sourceCardIndex, destinationCardIndex } 
 */
export const updateCardIndexWithInTheList = data => action(UPDATE_CARD_INDEX_WITH_IN_LIST, data);
/**
 * 
 * @param { cardId, sourceListId, destinationListId, sourceCardIndex, destinationCardIndex }
 */
export const updateCardIndexToDifferentList = data => action(UPDATE_CARD_INDEX_TO_DIFFERENT_LIST, data);


