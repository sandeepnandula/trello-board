
import React, { useState } from 'react';
import cx from 'classnames';

function addList() {
    const [showAddListOption, setShowAddListOption] = useState(false);
    const className = cx("add-list-container", {
        open: showAddListOption,
    })
    return (
        <div className={className}>
            <a className="add-list-btn btn" onClick={() => setShowAddListOption(!showAddListOption)}>Add a list</a>
            <textarea placeholder="Enter a title for this list..."></textarea>
            <div>
                <button>Add List</button>
                <span onClick={() => setShowAddListOption(!showAddListOption)}>X</span>
            </div>
        </div>
    );
}

export default addList;