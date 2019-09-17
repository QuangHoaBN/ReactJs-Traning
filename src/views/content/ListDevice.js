import React, { Component } from 'react';
import Items from './items.js';

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
                 <table width>
				  <thead>
				    <tr>
				      <th>ID</th>
				      <th>Name</th>
					  <th>Brand</th>
					  <th>IP</th>
				    </tr>
				  </thead>
				  <tbody>
				    {this.state.devices.map((value, index) => (
                        <Items 
                        name={value.name} 
                        brand={value.brand} 
                        user_id={value.user_id} 
                        ip={value.ip}
                        method={() => alert(value.user_id)} 
                        />
				    ))}
				  </tbody>
				</table> 
            </div>
        )
    }
}