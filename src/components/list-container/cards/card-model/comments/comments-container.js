import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import { bindActionCreators } from 'redux';
import { addCommentsToCard } from '../../cards-actions';
import { getCardCommentsByListAndCardId } from '../../../selectors/list-selector';

const disableButtonCss = {
    backgroundColor: "#e4e4e4",
    color: "black",
    cursor: "not-allowed",
}

function comments({ comments, cardId, listId, addCommentsToCard }) {
    const [newCommentString, setNewCommentString] = useState('');
    const [showSaveButton, setShowSaveButton] = useState(false);
    const inputTextArea = useRef(null);

    const emptyCurrentTextArea = () => {
        const { current } = inputTextArea
        if (current) return (current.value = '')
    }

    const updateComments = () => {
        if (newCommentString) {
            setNewCommentString('');
            setShowSaveButton(false);
            addCommentsToCard({ comment: newCommentString, cardId, listId });
            emptyCurrentTextArea();
        }
    }

    const className = cx('comments-section', {
        open: showSaveButton,
    })
    return (
        <div className={className}>
            <h3>Comments</h3>
            <textarea
                ref={inputTextArea}
                onFocus={() => setShowSaveButton(true)}
                placeholder="Enter comment here"
                defaultValue={newCommentString}
                onChange={({ target: { value } }) => setNewCommentString(value)}
            ></textarea>
            <button className="btn-save" style={newCommentString ? {} : disableButtonCss} onClick={updateComments} >Save</button>
            <button className="btn-cancel" onClick={() => {
                setShowSaveButton(false);
                emptyCurrentTextArea();
                setNewCommentString('')
            }}>X</button>
            <ul>
                {comments.map((comment, index) => <li key={index}>{comment}</li>)}
            </ul>
        </div>
    );
}


function mapStateToProps(state, { listId, cardId }) {
    return {
        comments: getCardCommentsByListAndCardId({ state, listId, cardId })
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addCommentsToCard
    }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(comments);