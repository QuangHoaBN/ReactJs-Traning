import React, { Component } from 'react';

export default class ListDevice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: []
        }
        this.getDevices = this.getDevices.bind(this);
    }

    //lifecycle: Will Mount => Mount => Mounted

    componentWillMount() {
        console.log('will mount')
    }

    componentDidMount() {
        console.log('did mount')
        this.getDevices()
    }

    getDevices() {
        let url = 'https://service.ibeau.vn:3000/users/device'; //endpoint API get devices

        // options for init request
        let options = {
            method: 'get'
        }

        fetch(url, options)
            .then(response => response.json())
            .then(res => {
                this.setState({devices: res.devices})
            })
    }

    render() {
        console.log('devices', this.state.devices)   
        return (
            <div>
                <p>List devices</p>
                 <table>
				  <thead>
				    <tr>
				      <th>STT</th>
				      <th>ID</th>
				      <th>Name</th>
					  <th>Brand</th>
					  <th>IP</th>
				    </tr>
				  </thead>
				  <tbody>
				    {this.state.devices.map((value, index) => (
				    	<tr key={index}>
							<td>{index}</td>
							<td>{value.user_id}</td>
							<td>{value.name}</td>
							<td>{value.brand}</td>
							<td>{value.ip}</td>
				    	</tr>	
				    ))}
				  </tbody>
				</table> 
            </div>
        )
    }
}