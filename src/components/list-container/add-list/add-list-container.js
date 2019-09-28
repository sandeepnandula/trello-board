
import React, { useState } from 'react';
import cx from 'classnames';

function addList() {
    const [showAddListOption, setShowAddListOption] = useState(false);
    const [newListTitle, setNewListTitle] = useState('');
    const className = cx("add-list-container", {
        open: showAddListOption,
    })

    const onTextAreaChangeHandler = ({ target }) => {
        const { value } = target;
        setNewListTitle(value);
    }
    const onClickClose = () => {
        setShowAddListOption(!showAddListOption);
        setNewListTitle('');
    }
    return (
        <div className={className}>
            <a className="add-list-btn btn" onClick={() => setShowAddListOption(!showAddListOption)}>Add a list</a>
            <textarea placeholder="Enter a title for this list..." onChange={onTextAreaChangeHandler}></textarea>
            <div>
                <button>Add List</button>
                <span onClick={onClickClose}>X</span>
            </div>
        </div>
    );
}

export default addList;