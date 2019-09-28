import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleShowCardDetailsModel } from '../../list-actions';
import { getCardTitleByListAndCardId, getCardDescriptionByListAndCardId, getCardCommentsByListAndCardId } from '../../../../selectors/list-selector'

function cardModelContainer({ showCardDetailsModel, toggleShowCardDetailsModel, cardDetails }) {
    const  { cardId, listId, description, title, comments } = cardDetails;
    if (showCardDetailsModel){
        return (
            <section className="card-model">
                <div className="model-content">
                    <span className="close" onClick={() => toggleShowCardDetailsModel()}>&times;</span>
                    <div className="details">
                        <input type="text" defaultValue={title} placeholder="Enter title of the card" />
                    </div>
                    <div className="description">
                        <h3>description</h3>
                        <textarea defaultValue={description}></textarea>
                        <button className="btn-save">Save</button>
                        <button className="btn-cancel">Save</button>
                    </div>
                    <div className="comments-section">
                        <h3>Comments</h3>
                        <textarea placeholder="Enter comment here"></textarea>
                        <button className="btn-save">Save</button>
                        <button className="btn-cancel">Save</button>
                        <ul>
                            {comments.map(comment => <li>{comment}</li>)}
                            
                        </ul>
                    </div>
                </div>
            </section>
        );
    } return null;
    
}

function mapStateToProps(state) {
    const  { cardId, listId } = state.cardModelDetails;
    let cardDetails = {
        title: '',
        description: '',
        comments: []
    }
    if (cardId && listId) {
        cardDetails['title'] = getCardTitleByListAndCardId({ state, listId, cardId });
        cardDetails['description'] = getCardDescriptionByListAndCardId({ state, listId, cardId })
        cardDetails['comments'] = getCardCommentsByListAndCardId({ state, listId, cardId })
        cardDetails['cardId'] = cardId
        cardDetails['listId'] = listId
    }
    return {
        cardModelDetails:state.cardModelDetails,
        cardDetails,
        showCardDetailsModel: state.showCardDetailsModel
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleShowCardDetailsModel,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cardModelContainer);