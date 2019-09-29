

/**
 * 
 * @param {object} state // current redux state object
 * @param {string} listId // Id of the list
 */
export const getListObjectById = ({ state, listId }) => {
    const { lists } = state;
    return lists[listId] || {};
}

export const getCardObjectById = ({ state, listId, cardId }) => {
    const listObject = getListObjectById({ state, listId });
    const cardObject = listObject['cards'];
    if(Object.keys(cardObject).length) {
        return cardObject[cardId] || {}
    }
    return {}
}