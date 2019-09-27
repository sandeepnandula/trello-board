import React from 'react';
import { connect } from 'react-redux';
import AddList from './add-list';
import List from './list-view';


const listContainer = ({ listIds }) => {
    return (
        <section className="lists-container">
            {listIds.map((listId) => {
                return (
                    <List key={listId} listId={listId} />
                );
            })}
            <AddList />
        </section>
    );
};


listContainer.propTypes = {

};

function mapStateToProps(state) {
    return {
        listIds: state.listIds
    };
}

export default connect(mapStateToProps)(listContainer);

