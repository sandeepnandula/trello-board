import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCommentsToCard } from '../../cards-actions';
import { getCardCommentsByListAndCardId } from '../../../selectors/list-selector';

function comments({ comments, cardId, listId, addCommentsToCard }) {
    const [newCommentString, setNewCommentString] = useState('');
    const updateComments = () => {
        if (newCommentString) {
            addCommentsToCard({ comment: newCommentString, cardId, listId })
        }
    }
    return (
        <div className="comments-section">
            <h3>Comments</h3>
            <textarea
                placeholder="Enter comment here"
                defaultValue={newCommentString}
                onChange={({ target: { value } }) => setNewCommentString(value)}
            ></textarea>
            <button className="btn-save" onClick={updateComments} >Save</button>
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