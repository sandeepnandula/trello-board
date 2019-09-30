import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import { getCardIdsByListId } from '../selectors/list-selector'
import AddCard from './add-card';
import CardList from './card-list';

const Cards = ({ listId, cardsIds }) => {
    const [showAddCardOption, setShowAddCardOption] = useState(false)
    return (
        <React.Fragment >
                <Droppable droppableId={listId} type="cards">
                    {provided => (
                        <ul className="cards" ref={provided.innerRef} {...provided.droppableProps}>
                            {cardsIds.map((cardId, index) => {
                                return (<CardList key={cardId} cardId={cardId} index={index} listId={listId} />)
                            })}
                            {showAddCardOption && <AddCard listId={listId} setShowAddCardOption={setShowAddCardOption} showAddCardOption={showAddCardOption} />}
                        </ul>
                    )}
                </Droppable >
                {!showAddCardOption && <button className="add-card-btn btn" onClick={() => setShowAddCardOption(!showAddCardOption)}>Add a card</button>}
            </React.Fragment>
    );
};
function mapStateToProps(state, { listId }) {
    return {
        cardsIds: getCardIdsByListId({ state, listId })
    };
}

export default connect(mapStateToProps)(Cards);