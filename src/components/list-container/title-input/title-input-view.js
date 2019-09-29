import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTitleByListId, getCardTitleByListAndCardId } from '../selectors/list-selector';
import { updateListTitle } from '../list-actions';
import { updateCardTitle } from '../cards/cards-actions';

/**
 * 
    We are using title-input as common for both card & list
    - If (cardId) is their then till will behave like card-title-updation
    - else It will behave like list list-tittle-updation

 */
const title = ({ title, listId, cardId, updateListTitle, updateCardTitle }) => {
    const [newTitle, setNewTitle] = useState(title);

    const onChangeInputValue = ({ target: { value } }) => {
        setNewTitle(value)
    }
    /**
     * On user goes out of focus from the title input then only we 
        are gonna update the title.
     */
    const onInputFocusOut = () => {
        if (newTitle != title) {
            if (cardId) {
                return updateCardTitle({ title: newTitle, cardId, listId });
            } return updateListTitle({ title: newTitle, listId });
        }
    }
    return (
        <input
            className="list-title"
            type="text"
            defaultValue={title || newTitle}
            onChange={onChangeInputValue}
            onBlur={onInputFocusOut}
        />
    );
};

title.propTypes = {
    title: PropTypes.string,
    listId: PropTypes.string,
    cardId: PropTypes.string,
    updateListTitle: PropTypes.func.isRequired,
    updateCardTitle: PropTypes.func.isRequired,
}

title.defaultProps = {
    title: '',
    listId: '',
    cardId: '',
}

function mapStateToProps(state, { listId, cardId }) {
    let title = ''
    if (cardId) {
        title = getCardTitleByListAndCardId({ state, listId, cardId });
    } else {
        title = getTitleByListId({ state, listId });
    }
    return {
        title
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateListTitle,
        updateCardTitle,
    }, dispatch);
}



export default connect(mapStateToProps, mapDispatchToProps)(title);