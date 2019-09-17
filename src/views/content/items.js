import React from 'react';
export default class Items extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }
    render(){
        return(
            <tr>
                <td onClick={this.props.method}>{this.props.user_id}</td>
			    <td>{this.props.name}</td>
				<td>{this.props.brand}</td>
				<td>{this.props.ip}</td>
            </tr> 
        )
    }
}