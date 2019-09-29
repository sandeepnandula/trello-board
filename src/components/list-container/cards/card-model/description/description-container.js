import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCardDescription } from '../../cards-actions';
import { getCardDescriptionByListAndCardId } from '../../../selectors/list-selector';

function description({ description, cardId, listId, updateCardDescription }) {
    const initialState = ''
    const [newDescription, setNewDescription] = useState(initialState);

    const onChangeDescriptionValue = ({ target: { value } }) => {
        setNewDescription(value)
    }
    const updateNewDiscriptionToCard = () => {
        if (newDescription != description) {
            updateCardDescription({ description: newDescription, cardId, listId });
        }
        setNewDescription(initialState);
    }
    return (
        <div className="description">
            <h3>Description</h3>
            <textarea
                defaultValue={description}
                placeholder= 'Add a more detailed description'
                onChange={onChangeDescriptionValue}
                onBlur={updateNewDiscriptionToCard}
            ></textarea>
            <button className="btn-save">Save</button>
        </div>
    );
}

function mapStateToProps(state, { listId, cardId }) {
    return {
        description: getCardDescriptionByListAndCardId({ state, listId, cardId })
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateCardDescription
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(description);