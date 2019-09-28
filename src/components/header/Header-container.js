import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderView from './header-view'

function mapStateToProps(state) {
    const { header: {title: headerTitle}} = state
    return {
        headerTitle,  
    };
}

class HeaderContainer extends Component {
    render() {
        const { headerTitle } = this.props;
        return (
            <HeaderView title={headerTitle} />
        );
    }
}

export default connect(
    mapStateToProps,
)(HeaderContainer);