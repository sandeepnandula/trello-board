import React from 'react';
import PropTypes from 'prop-types';
import DeleteList from './delete-list';
import Cards from './cards';
import ListTitle from './title-input';

const list = ({ listId }) => {
    return (
        <div className="list">
            <ListTitle listId={listId} />
            <DeleteList listId={listId} />
            <Cards listId={listId} />
        </div>
    );
};

list.propTypes = {
    listId: PropTypes.string,
};

list.defaultProps = {
    listId: '',
}


export default list;