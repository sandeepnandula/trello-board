import React from 'react';

import DeleteList from './delete-list';
import Cards from './cards';
import ListTitle from './list-title';

const list = ({ listId }) => {
    return (
        <div className="list">
            <ListTitle listId={listId} />
            <DeleteList listId={listId}/>
            <Cards listId={listId}/>
        </div>
    );
};

list.propTypes = {

};


export default list;