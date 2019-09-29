import {
    TOGGLE_SHOW_CARD_DETAILS_MODEL,
    ADD_LIST,
    DELETE_LIST,
    UPDATE_LIST_TITLE,
} from './list-actions';

import {
    ADD_CARD,
    DELETE_CARD,
    UPDATE_CARD_TITLE,
    UPDATE_CARD_DESCRIPTION,
    ADD_COMMENTS_TO_CARD,
    UPDATE_CARD_INDEX_WITH_IN_LIST,
    UPDATE_CARD_INDEX_TO_DIFFERENT_LIST,
} from './cards/cards-actions';

// State structure of the list reducer
/*
Example:
    Default board is having three lists `Sprint Backlog`, `Work In Progress` and `Done`
    Each of the list is containing some story cards


listDemo = {
    "list-1": {
        id: "list-1",
        title: "Sprint Backlog",
        cardIds: ["card-1", "card-2", "card-3"],
        cards: {
            "card-1": {
                id: "card-1",
                title: "testing story",
                description: "Testing description",
                comments: ["testing comments", "testing comments"]
            },
            "card-2": {
                id: "card-2",
                title: "testing story",
                description: "Testing description",
                comments: ["testing comments", "testing comments"]
            },
            "card-3": {
                id: "card-3",
                title: "testing story",
                description: "Testing description",
                comments: ["testing comments", "testing comments"]
            }
        }
    },
    "list-2": {
        id: "list-2",
        title: "Work In Progress",
        cardIds: ["card-2", "card-3"],
        cards: {
            "card-2": {
                id: "card-2",
                title: "testing story",
                description: "Testing description",
                comments: ["testing comments", "testing comments"]
            },
            "card-3": {
                id: "card-3",
                title: "testing story",
                description: "Testing description",
                comments: ["testing comments", "testing comments"]
            }
        }
    },
    "list-3": {
        id: "list-3",
        title: "Done",
        cardIds: ["card-3"],
        cards: {
            "card-3": {
                id: "card-3",
                title: "testing story",
                description: "Testing description",
                comments: ["testing comments", "testing comments"]
            }
        }
    }
}
*/

/********* Card reducers ************ */

const comments = (state = [], action) => {
    const { comment } = action
    switch (action.type) {
        case ADD_COMMENTS_TO_CARD:
            return [
                ...state,
                comment
            ]
        default:
            return state;
    }
}

const card = (state = {}, action) => {
    switch (action.type) {
        case ADD_CARD:
            return {
                id: action.cardId,
                title: action.title || state.title,
                description: action.description || state.description || '',
                comments: comments((action.comments || state.comments), action),
            }
        case UPDATE_CARD_TITLE:
            return {
                ...state,
                title: action.title || state.title,
            }
        case UPDATE_CARD_DESCRIPTION:
            return {
                ...state,
                description: action.description,
            }
        case ADD_COMMENTS_TO_CARD:
            return {
                ...state,
                comments: comments(state.comments, action)
            }
        default:
            return state;
    }
}

const cards = (state = {}, action) => {
    const { cardId } = action
    if (!cardId) return state;
    switch (action.type) {
        case ADD_CARD: {
            // const cardId = generateCardId(cards);
            // action['id'] = cardId
            return {
                ...state,
                [cardId]: card(state, action),
            }
        }
        case UPDATE_CARD_TITLE:
        case ADD_COMMENTS_TO_CARD:
        case UPDATE_CARD_DESCRIPTION:
            return {
                ...state,
                [cardId]: card(state[cardId], action),
            }
        case DELETE_CARD:
            const { [cardId]: deleted, ...rest } = state
            return rest
        default:
            return state;
    }
}

/********* List reducers ************ */

const list = (state = {}, action) => {
    switch (action.type) {
        case ADD_LIST:
            return {
                id: action.listId,
                title: action.title,
                cardIds: [],
            }
        case UPDATE_LIST_TITLE:
            return {
                ...state,
                title: action.title || state.title,
            }
        case ADD_CARD:
            return {
                ...state,
                cardIds: [...state.cardIds, action.cardId],
                cards: cards(state.cards, action),
            }
        case UPDATE_CARD_TITLE:
        case UPDATE_CARD_DESCRIPTION:
        case ADD_COMMENTS_TO_CARD:
            return {
                ...state,
                cards: cards(state.cards, action),
            }
        case UPDATE_CARD_INDEX_WITH_IN_LIST:
            const { cardIds } = state;
            [cardIds[action.sourceCardIndex], cardIds[action.destinationCardIndex]] = [cardIds[action.destinationCardIndex], cardIds[action.sourceCardIndex]]
            return {
                ...state,
                [cardIds]: [...cardIds],
                cards: cards(state.cards, action),
            }
        case UPDATE_CARD_INDEX_TO_DIFFERENT_LIST: {
            let { cardIds } = state;
            /**
                 Here we are checking if ther is no cards in list add directly or else adding according
                    to the index it has dropped.
             */
             if (cardIds.length) {
                cardIds.splice(action.destinationCardIndex, 0, action.cardId);
                cardIds.join();
             } else {
                 cardIds = [action.cardId]
             }
            return {
                ...state,
                cardIds,
                cards: cards(state.cards, { ...action, type: ADD_CARD }),
            }
        }
        case DELETE_CARD: {
            const { cardIds } = state;

            const cardIndex = cardIds.indexOf(action.cardId);
            if (cardIndex < 0) {
                return {
                    ...state,
                    cards: cards(state.cards, action),
                };
            }
            cardIds.splice(cardIndex, 1);
            return {
                ...state,
                [cardIds]: [...cardIds],
                cards: cards(state.cards, action),
            }
        }
        default:
            return state;
    }
}



const lists = (state = {}, action) => {
    const { listId } = action;
    // If found there is listId in the event we wont make the update of store
    if (!listId && action.type != UPDATE_CARD_INDEX_TO_DIFFERENT_LIST) return state

    switch (action.type) {
        case ADD_LIST:
            return {
                ...state,
                [listId]: list(state, action),
            }
        case UPDATE_LIST_TITLE:
        case ADD_CARD:
        case UPDATE_CARD_TITLE:
        case UPDATE_CARD_DESCRIPTION:
        case ADD_COMMENTS_TO_CARD:
        case UPDATE_CARD_INDEX_WITH_IN_LIST:
        case DELETE_CARD: {
            return {
                ...state,
                [listId]: list(state[listId], action),
            }
        }
        case UPDATE_CARD_INDEX_TO_DIFFERENT_LIST: {
            /*
                        Date we are going to receive
                        { cardId, sourceListId, destinationListId, sourceCardIndex, destinationCardIndex}            The updation are going in the following steps
                            -- CARD details must be remove from the source list
                            -- CARD details must be add into the new destination
                     */
            /** STEP 1 */
            // Preserving the card detatils before deleting from source list
            const cardDetails = state[action.sourceListId]['cards'][action.cardId]
            // Card is removed from the source list
            const updateState = {
                ...state,
                [action.sourceListId]: list(state[action.sourceListId], { ...action, type: DELETE_CARD }),
            }
            // Updating the card details to new destination list
            return {
                ...updateState,
                [action.destinationListId]: list(state[action.destinationListId], { ...action, ...cardDetails, type: UPDATE_CARD_INDEX_TO_DIFFERENT_LIST })
            }
        }

        case DELETE_LIST:
            const { [listId]: deleted, ...rest } = state;
            return rest;
        default:
            return state;
    }
}
// const listIdsDemo = ["list-1", "list-2", "list-3"]

const listIds = (state = [], action) => {
    switch (action.type) {
        case ADD_LIST:
            return [
                ...state,
                action.listId,
            ]
        case DELETE_LIST:
            const listIndex = state.indexOf(action.listId);
            if (listIndex < 0) {
                return state;
            }
            state.splice(listIndex, 1);
            return [
                ...state,
            ];
        default:
            return state
    }
};


/* ****** Card Model ******* */

const showCardDetailsModel = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_CARD_DETAILS_MODEL:
            return !state;
        default:
            return state;
    }
};

const cardModelDetails = (state = {}, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_CARD_DETAILS_MODEL:
            const { cardId, listId } = action;
            if (cardId && listId) return { cardId, listId }
            return {}
        default:
            return state;
    }
}



export default {
    lists,
    listIds,
    showCardDetailsModel,
    cardModelDetails
}