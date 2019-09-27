import React from 'react';
import PropTypes from 'prop-types';
import AddList from './add-list';
import AddCard from './add-card';
import DeleteCard from './delete-card';



const list = () => {
    return (
        <section className="lists-container">
            <div className="list">
                <input type="text" defaultValue="Task to do" className="list-title" />
                <DeleteCard />
                <ul className="list-items">
                    <li>Complete mock-up for client website<span className="delete-card"></span></li>
                    <li>Email mock-up to client for feedback</li>
                    <li>Update personal website header background image</li>
                    <li>Update personal website heading fonts</li>
                    <li>Add google map to personal website</li>
                    <li>Begin draft of CSS Grid article</li>
                    <AddCard />
                </ul>
                <button className="add-card-btn btn">Add a card</button>
            </div>
            <AddList />
        </section>
    );
};

list.propTypes = {

};

export default list;