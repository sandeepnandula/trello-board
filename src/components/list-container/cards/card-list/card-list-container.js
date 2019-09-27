import React from 'react';
import { connect } from 'react-redux';
import DeleteCard from '../delete-card';
import { getCardTitleByListAndCardId } from '../../../../selectors/list-selector'


function cardList({ cardTitle }) {
    return (
        <li>{cardTitle}<DeleteCard /></li>
    );
}
function mapStateToProps(state, { listId, cardId }) {
    return {
        cardTitle: getCardTitleByListAndCardId({ state, listId, cardId })
    };
}

export default connect(mapStateToProps)(cardList);