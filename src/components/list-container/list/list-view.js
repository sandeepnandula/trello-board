import React from 'react';
import AddCard from './add-card';
import DeleteCard from './delete-card';



const list = () => {
    return (
        <div className="list">
            <input type="text" defaultValue="Task to do" className="list-title" />
            <span className="delete-list"></span>
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
        </div>
    );
};

list.propTypes = {

};

export default list;