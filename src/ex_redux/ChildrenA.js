import React, { Component } from 'react';
import ChildrenAB from './ChildrenAB';
import { connect } from "react-redux";

class ChildrenA extends Component {
    render() {
        return (
            <div>
                <p>Children A: {this.props.name} (of children A)</p>
                <ChildrenAB/>
            </div>
        );
    }
}
const getState = (state) => {
    return {
        name: state.firstReducer.name
    }
}
export default connect(getState)(ChildrenA);