import React from 'react';
import { connect } from 'react-redux';
import { getTitleByListId } from '../../../selectors/list-selector';

const title = ({ listTitle }) => {
    return (
        <input type="text" defaultValue={listTitle} className="list-title" />
    );
};

function mapStateToProps(state, { listId }) {
    return {
        listTitle: getTitleByListId({ state, listId })
    };
}


export default connect(mapStateToProps)(title);