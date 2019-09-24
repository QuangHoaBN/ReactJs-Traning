import React, { Component } from 'react';
import { connect } from "react-redux";

class ChildrenAB extends Component {
    render() {
        return (
            <div>
                <p>Children AB: {this.props.name} (of children of children A)</p>
            </div>
        );
    }
}
const getState = (state) => {
    return {
        name: state.firstReducer.name
    }
}
export default connect(getState)(ChildrenAB);