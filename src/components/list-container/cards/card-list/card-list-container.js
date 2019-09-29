import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Draggable } from 'react-beautiful-dnd';
import { toggleShowCardDetailsModel } from '../../list-actions';
import DeleteCard from '../delete-card';
import { getCardTitleByListAndCardId } from '../../selectors/list-selector'


function cardList({ cardTitle, toggleShowCardDetailsModel, cardId, listId, index }) {
    const onClickList = () => {
        toggleShowCardDetailsModel({ cardId, listId })
    }
    return (
        <Draggable draggableId={cardId} index={index}>
            {provided => (
                <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    onClick={onClickList}>{cardTitle}
                    <DeleteCard cardId={cardId} listId={listId} />
                </li>
            )}
        </Draggable>
    );
}
function mapStateToProps(state, { listId, cardId }) {
    return {
        cardTitle: getCardTitleByListAndCardId({ state, listId, cardId })
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleShowCardDetailsModel,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cardList);