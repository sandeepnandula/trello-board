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
        // TOBO:: Have to debug cardIds object issue
        // Reason: Memorization is not working while list updation
      return [...listObject['cardIds']];
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