import { createSelector } from 'reselect';
import { getListObjectById, getCardObjectById } from './utils';

// REf: https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c


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