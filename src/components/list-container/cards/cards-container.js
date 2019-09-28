import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCardsByListId } from '../../../selectors/list-selector'
import AddCard from './add-card';
import CardList from './card-list';

const Cards = ({ listId, cardsIds }) => {
    const [showAddCardOption, setShowAddCardOption] = useState(false)
    return (
        <React.Fragment>
            <ul className="cards">
                {cardsIds.map(cardId => {
                    return(<CardList key={cardId} cardId={cardId} listId={listId}/>)
                })}
                {showAddCardOption && <AddCard listId={listId} setShowAddCardOption={setShowAddCardOption} showAddCardOption={showAddCardOption} />}
            </ul>
            {!showAddCardOption && <button className="add-card-btn btn" onClick={() => setShowAddCardOption(!showAddCardOption)}>Add a card</button>}
        </React.Fragment>
    );
};
function mapStateToProps(state, { listId }) {
    return {
        cardsIds: getCardsByListId({ state, listId })
    };
}

export default connect(mapStateToProps)(Cards);