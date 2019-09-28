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
} from './cards/cards-actions';

import { CARD_ID } from '../../constants';

// State structure of the list reducer
/*
Example:
    Default board is having three lists `Sprint Backlog`, `Work In Progress` and `Done`
    Each of the list is containing some story cards


    list = {
        list-1: {
            id: "list-1"
            title: "Sprint Backlog"
            cards: ["card-1", "card-2", "card-3"] // Id's of the cards
        }
        list-2: {
            id: "list-2"
            title: "Sprint Backlog"
            cards: ["card-1", "card-2"]
        }
        list-3: {
            id: "list-3"
            title: "Sprint Backlog"
            cards: ["card-1"]
        }
    }
*/

const listDemo = {
    "list-1": {
        id: "list-1",
        title: "Sprint Backlog",
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
                title: action.title
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

const list = (state = {}, action) => {
    switch (action.type) {
        case ADD_LIST:
            return {
                id: action.listId,
                title: action.title,
            }
        case UPDATE_LIST_TITLE:
            return {
                ...state,
                title: action.title || state.title,
            }
        case ADD_CARD:
        case UPDATE_CARD_TITLE:
        case UPDATE_CARD_DESCRIPTION:
        case ADD_COMMENTS_TO_CARD:
        case DELETE_CARD:
            return {
                ...state,
                cards: cards(state.cards, action),
            }
        default:
            return state;
    }
}



const lists = (state = listDemo, action) => {
    const { listId } = action;
    // If found there is listId in the event we wont make the update of store
    if (!listId) return state

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
        case DELETE_CARD: {
            return {
                ...state,
                [listId]: list(state[listId], action),
            }
        }
        case DELETE_LIST:
            const { [listId]: deleted, ...rest } = state;
            return rest;
        default:
            return state;
    }
}
const listIdsDemo = ["list-1", "list-2", "list-3"]

const listIds = (state = listIdsDemo, action) => {
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