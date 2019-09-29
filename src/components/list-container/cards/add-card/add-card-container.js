import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewCard } from '../cards-actions';

const generateCardId = () => {
    // const ids = Object.keys(cards);
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    const cardId = '_' + Math.random().toString(36).substr(2, 9);
    return cardId;
}


const addCard = ({ setShowAddCardOption, showAddCardOption, addNewCard, listId }) => {
    const [newCardTitle, setNewCardTitle] = useState('');

    const onTextAreaChangeHandler = ({ target }) => {
        const { value } = target;
        setNewCardTitle(value);
    }
    const onClickClose = () => {
        setShowAddCardOption(!showAddCardOption)
        setNewCardTitle('');
    }
    const onClickAddCard = () => {
        addNewCard({ title: newCardTitle, listId, cardId: generateCardId() });
        onClickClose();
    }
    return (
        <div className='add-card-container'>
            <textarea
                placeholder="Enter a title for this card..."
                onChange={onTextAreaChangeHandler}
            ></textarea>
            <div>
                <button onClick={onClickAddCard}>Add Card</button>
                <span onClick={onClickClose}>X</span>
            </div>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addNewCard
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(addCard);