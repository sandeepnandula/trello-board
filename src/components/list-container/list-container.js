import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import AddList from './add-list';
import List from './list-view';
import { updateCardIndexWithInTheList, updateCardIndexToDifferentList } from './cards/cards-actions';
import { bindActionCreators } from 'redux';

// const result = {
//     draggableId: 'row-1',
//     type: 'TYPE',
//     reason: 'DROP',
//     source: {
//         droppableId: 'column-1,
//         index: 0,
//     },
//     destination: {
//         droppableId: 'column-1',
//         index: 1,
//     },
// }

const listContainer = ({ listIds, updateCardIndexWithInTheList, updateCardIndexToDifferentList }) => {
    const onDragEnd = (result) => {
        const { destination, source, draggableId: cardId } = result
        // If there is no destination no need to update the states
        if (!destination) return  // User dropped it outside the containers
        const { droppableId: sourceListId, index: sourceCardIndex } = source;
        const { droppableId: destinationListId, index: destinationCardIndex } = destination
        // This is user dropped in the same position.
        if ((sourceListId === destinationListId) && (sourceCardIndex === destinationCardIndex)) {
            return
        }
        // If the both the list Id's are same means user dropped in the same list with different position
        if (sourceListId === destinationListId) {
            return updateCardIndexWithInTheList({ cardId, listId: sourceListId, sourceCardIndex, destinationCardIndex })
        }
        // If the user drops the card in the different list
        if (sourceListId !== destinationListId) {
            return updateCardIndexToDifferentList({ cardId, sourceListId, destinationListId, sourceCardIndex, destinationCardIndex })
        }
    }
    return (
        <DragDropContext onDragEnd={onDragEnd} >
            <Droppable
                droppableId="all-lists"
                direction="horizontal"
                type="column"
            >
                {(provided) => {
                    return (
                        <section
                            className="lists-container"
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {listIds.map((listId, index) => {
                                return (
                                    <List key={listId} listId={listId} index={index} />
                                );
                            })}
                            <AddList />
                        </section>
                    )
                }}
            </Droppable>
        </DragDropContext>

    );
};


listContainer.propTypes = {
    listIds: PropTypes.any,
    updateCardIndexWithInTheList: PropTypes.func.isRequired,
    updateCardIndexToDifferentList: PropTypes.func.isRequired,
};

listContainer.defaultProps = {
    listIds: []
}

function mapStateToProps(state) {
    return {
        listIds: state.listIds
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateCardIndexWithInTheList,
        updateCardIndexToDifferentList,
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(listContainer);

