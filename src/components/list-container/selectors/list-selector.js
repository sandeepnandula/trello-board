import { createSelector } from 'reselect';
import { getListObjectById, getCardObjectById } from './utils';

// REf: https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c


export const getTitleByListId = createSelector(
    [getListObjectById],
    (listObject) => (listObject['title'] || '')
)

export const getCardIdsByListId = createSelector(
    [getListObjectById],
    (listObject) => {
      return listObject['cardIds'] || [];
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