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

const list = {
    "list-1": {
        id: "list-1",
        title: "Sprint Backlog",
        cards: ["card-1", "card-2", "card-3"] 
    },
    "list-2": {
        id: "list-2",
        title: "Work In Progress",
        cards: ["card-1", "card-2"]
    },
    "list-3": {
        id: "list-3",
        title: "Done",
        cards: ["card-1"]
    }
}

const lists = (state={}, action) => {
    return list
    // switch (action.type) {
    //     case value:

    //         break;

    //     default:
    //         break;
    // }
}

const listIds = (state={}, action) => {
    const listIds  = ["list-1", "list-2", "list-3"]
    return listIds
}

export default {
    lists,
    listIds
}