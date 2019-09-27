import React from 'react';

const addList = () => {
    return (
        <div className="add-list-container">
            <a href='#foo' className="add-list-btn btn">Add a list</a>
            <textarea placeholder="Enter a title for this list..."></textarea>
            <div>
                <button>Add List</button>
                <span>X</span>
            </div>
        </div>
    );
};

export default addList;