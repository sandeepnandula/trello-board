import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleShowCardDetailsModel } from '../../list-actions';
import DeleteCard from '../delete-card';
import { getCardTitleByListAndCardId } from '../../../../selectors/list-selector'


function cardList({ cardTitle, toggleShowCardDetailsModel, cardId, listId }) {
    return (
        <li onClick={() => toggleShowCardDetailsModel({ cardId, listId })}>{cardTitle}<DeleteCard /></li>
    );
}
function mapStateToProps(state, { listId, cardId }) {
    return {
        cardTitle: getCardTitleByListAndCardId({ state, listId, cardId })
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleShowCardDetailsModel,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cardList);