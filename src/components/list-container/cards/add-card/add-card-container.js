import React from 'react';

const addCard = ({ setShowAddCardOption, showAddCardOption}) => {
    return (
        <div className='add-card-container'>
            <textarea placeholder="Enter a title for this card..."></textarea>
            <div>
                <button>Add Card</button>
                <span onClick={() => setShowAddCardOption(!showAddCardOption)}>X</span>
            </div>
        </div>
    );
};

export default addCard;