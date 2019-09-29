import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteListById } from '../list-actions'

function deleteList({ listId, deleteListById }) {
    return (
        <span className="delete-list" onClick={() => deleteListById({ listId })}></span>
    );
};

deleteList.propTypes = {
    listId: PropTypes.string.isRequired,
    deleteListById: PropTypes.func.isRequired,
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteListById,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(deleteList);