import React, { useState } from 'react';

const addCard = ({ setShowAddCardOption, showAddCardOption }) => {
    const [newCardTitle, setNewCardTitle] = useState('');

    const onTextAreaChangeHandler = ({ target }) => {
        const { value } = target;
        setNewCardTitle(value);
    }
    const onClickClose = () => {
        setShowAddCardOption(!showAddCardOption)
        setNewCardTitle('');
    }
    return (
        <div className='add-card-container'>
            <textarea placeholder="Enter a title for this card..." onChange={onTextAreaChangeHandler}></textarea>
            <div>
                <button>Add Card</button>
                <span onClick={onClickClose}>X</span>
            </div>
        </div>
    );
};

export default addCard;