import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import AddList from './add-list';
import List from './list-view';


// const result = {
//     draggableId: 'task-1',
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

const listContainer = ({ listIds }) => {
    const onDragEnd = (result) => {
        console.log(result)
        const { destination, source, draggableId } = result
        // If there is no destination no need to update the states
        if (!destination) return  // User dropped it outside the containers
        // This is user dropped in the same position.
        if (destination.droppableId == source.droppableId &&
            destination.index === source.index) return
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
                            {provided.placeholder}
                        </section>
                    )

                }}
            </Droppable>
        </DragDropContext>

    );
};


listContainer.propTypes = {

};

function mapStateToProps(state) {
    return {
        listIds: state.listIds
    };
}

export default connect(mapStateToProps)(listContainer);

