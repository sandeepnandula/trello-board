import { createSelector } from 'reselect';


// REf: https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c



/**
 * 
 * @param {object} state // current redux state object
 * @param {string} listId // Id of the list
 */
const getListObjectById = ({ state, listId }) => {
    const { lists } = state;
    return lists[listId];
}

const getCardObjectById = ({ state, listId, cardId }) => {
    const listObject = getListObjectById({ state, listId });
    const cardObject = listObject['cards'];
    if(cardObject) {
        return cardObject[cardId]
    }
    return {}
}
export const getTitleByListId = createSelector(
    [getListObjectById],
    (listObject) => (listObject['title'] || '')
)

export const getCardsByListId = createSelector(
    [getListObjectById],
    (listObject) => {
      const cardsDetails = listObject['cards'] || [];
      if(cardsDetails) {
          const cardsIds = Object.keys(cardsDetails)
          return cardsIds
      } return [];
    }
)

export const getCardTitleByListAndCardId = createSelector(
    [getCardObjectById],
    (cardObject) => (cardObject['title'] || ''),
);

export const getCardDescriptionByListAndCardId = createSelector(
    [getCardObjectById],
    (cardObject) => (cardObject['description'] || ''),
);

export const getCardCommentsByListAndCardId = createSelector(
    [getCardObjectById],
    (cardObject) => (cardObject['comments'] || []),
);