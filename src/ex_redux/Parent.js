import React, { Component } from 'react';
import ChildrenA from './ChildrenA';

class Parent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.changeName('Minh Tuyet')}>Change Name</button>
                <p>This is Parent: {this.props.name}</p>  
                <ChildrenA/>
            </div>
        );
    }
}
export default Parent;