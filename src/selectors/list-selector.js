import { createSelector } from 'reselect';


/**
 * 
 * @param {object} state // current redux state object
 * @param {string} listId // Id of the list
 */
const getListObjectById = ({ state, listId }) => {
    const { lists } = state;
    return lists[listId];
}

export const getTitleByListId = createSelector(
    [getListObjectById],
    (listObject) => listObject['title']
)

export const getCardsByListId = createSelector(
    [getListObjectById],
    (listObject) => listObject['cards']
)