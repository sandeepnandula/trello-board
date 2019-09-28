import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleShowCardDetailsModel } from '../../list-actions';
// We are reusing this from list-container
import ListInput from '../../title-input';
import Description from './description';
import Comments from './comments';

function cardModelContainer({ showCardDetailsModel, toggleShowCardDetailsModel, cardModelDetails }) {
    const  { cardId, listId } = cardModelDetails;
    if (showCardDetailsModel){
        return (
            <section className="card-model">
                <div className="model-content">
                    <span className="close" onClick={() => toggleShowCardDetailsModel()}>&times;</span>
                    <div className="details">
                        <ListInput listId={listId} cardId={cardId} />
                    </div>
                    <Description listId={listId} cardId={cardId}/>
                    <Comments listId={listId} cardId={cardId} />
                </div>
            </section>
        );
    } return null;
    
}

function mapStateToProps(state) {
    return {
        cardModelDetails:state.cardModelDetails,
        showCardDetailsModel: state.showCardDetailsModel
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        toggleShowCardDetailsModel,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(cardModelContainer);