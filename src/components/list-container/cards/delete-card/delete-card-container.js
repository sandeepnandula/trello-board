import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteCardById } from '../cards-actions';

const deleteCard = ({ deleteCardById, cardId, listId }) => {

    const onClickDeleteCard = (event) => {
        // Added to stop the event bubbling
        event.stopPropagation();
        deleteCardById({ cardId, listId })
    }

    return (
        <span className="delete-card" onClick={onClickDeleteCard}></span>
    );
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteCardById,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(deleteCard);
