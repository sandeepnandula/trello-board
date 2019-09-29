import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteListById } from '../list-actions'

function deleteList({ listId, deleteListById }) {
    return (
        <span className="delete-list" onClick={() => deleteListById({ listId })}></span>
    );
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteListById,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(deleteList);