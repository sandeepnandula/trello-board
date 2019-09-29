
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cx from 'classnames';
import { addNewList } from '../list-actions';



const generateListId = (cards) => {
    // const ids = Object.keys(cards);
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    const cardId = '_' + Math.random().toString(36).substr(2, 9);
    return cardId;
}

function addList({ addNewList }) {
    const [showAddListOption, setShowAddListOption] = useState(false);
    const [newListTitle, setNewListTitle] = useState('');
    const inputTextArea = useRef(null);

    const onTextAreaChangeHandler = ({ target }) => {
        const { value } = target;
        setNewListTitle(value);
    }
    const onClickClose = () => {
        setShowAddListOption(!showAddListOption);
        setNewListTitle('');
    }

    const emptyCurrentTextArea = () => {
        const { current } = inputTextArea
        if (current) return (current.value = '')
    }
    const onAddList = () => {
        if (newListTitle) {
            addNewList({ listId: generateListId(), title: newListTitle });
        }
        emptyCurrentTextArea();
        onClickClose();
    }

    const onTextAreaKeyPress = ({ which }) => {
        if(which == 13) {
            onAddList();
        }
    }

    const className = cx("add-list-container", {
        open: showAddListOption,
    })
    
    return (
        <div className={className}>
            <a className="add-list-btn btn" onClick={() => setShowAddListOption(!showAddListOption)}>Add a list</a>
            <textarea
                ref={inputTextArea}
                onKeyPress={onTextAreaKeyPress}
                placeholder="Enter a title for this list..."
                onChange={onTextAreaChangeHandler}
            ></textarea>
            <div>
                <button onClick={onAddList} >Add List</button>
                <span onClick={onClickClose}>X</span>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addNewList
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(addList);