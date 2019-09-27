import React from 'react';
import AddCard from './add-card';
import DeleteCard from './delete-card';

const Cards = ({ listId }) => {
    return (
        <React.Fragment>
            <ul className="cards">
                <li>Complete mock-up for client website<DeleteCard /></li>
                <li>Email mock-up to client for feedback</li>
                <li>Update personal website header background image</li>
                <li>Update personal website heading fonts</li>
                <li>Add google map to personal website</li>
                <li>Begin draft of CSS Grid article</li>
                <AddCard />
            </ul>
            <button className="add-card-btn btn">Add a card</button>
        </React.Fragment>
    );
};

export default Cards;