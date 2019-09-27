import React from 'react';
import { connect } from 'react-redux';
import AddList from './add-list';
import List from './list';


const listContainer = ({ listIds }) => {
    return (
        <section className="lists-container">
            {listIds.map((listId) => {
                return (
                    <List key={listId} id={listId} />
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

