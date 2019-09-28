
function action(type, payload={}) {
    return {type, ...payload}
}
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const UPDATE_CARD_TITLE = 'UPDATE_CARD_TITLE';
export const UPDATE_CARD_DESCRIPTION = 'UPDATE_CARD_DESCRIPTION';
export const ADD_COMMENTS_TO_CARD = 'ADD_COMMENTS_TO_CARD';

export const addNewCard = (data) => action(ADD_CARD, data);
export const updateCardTitle = (data) => action(UPDATE_CARD_TITLE, data);
export const deleteCardById = (data) => action(DELETE_CARD, data);
export const updateCardDescription = data => action(UPDATE_CARD_DESCRIPTION, data);
export const addCommentsToCard = data => action(ADD_COMMENTS_TO_CARD, data);
