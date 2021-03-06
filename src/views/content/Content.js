import React from 'react';
import ListDevice from './ListDevice.js';
import Table from './Table.js';
class Content extends React.Component {
	constructor(){
		super();
		this.state = {
			number: 5,
			name: '',
			value: ''
		}
		this.increase=this.increase.bind(this);
		this.decrease=this.decrease.bind(this);
		this.handleChange=this.handleChange.bind(this);
		this.showName=this.showName.bind(this);
	}
	decrease (){
		this.setState({number: this.state.number - 1});
	} 
	increase (){
		this.setState({number: this.state.number + 1});
	}
	handleChange(text){
   		this.setState({ value: text.target.value });
 	}
 	showName(){
 		this.setState({ name: this.state.value, value:''});
	}
	render(){
		return (
			<div>
				<button onClick={this.decrease}>-</button>
				<p>Number: {this.state.number}</p>
				<button onClick={()=>this.increase()}>+</button>
				<br></br>


				
				<input value={this.state.value} onChange={this.handleChange}></input>
				<button onClick={this.showName}>Show Name</button>
				<p>My name is: {this.state.name} </p>
				<ListDevice/>
				<Table />
				
			</div>	
		);
	}
}
export default Content;