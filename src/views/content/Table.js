import React from 'react';
export default class Table extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            vId: 0,
            vName: '',
            vBrand: '',
            vIp: '',
            table: [
                { id: 1, name: 'Row 1', brand: 'Apple', ip: '192.168.7.1'},
                { id: 2, name: 'Row 2', brand: 'Samsung', ip: '192.168.0.123'},
                { id: 3, name: 'Row 3', brand: 'Huawei', ip: '192.168.2.7'},
                { id: 4, name: 'Row 4', brand: 'Oppo', ip: '192.168.0.1'},
                { id: 5, name: 'Row 5', brand: 'Sony', ip: '192.168.12.1'}
            ]
        };
        this.onChangeId=this.onChangeId.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeBrand=this.onChangeBrand.bind(this);
        this.onChangeIp=this.onChangeIp.bind(this);
        this.saveTable=this.saveTable.bind(this);
    }
    onChangeId(text_targe){
        this.setState({ vId: text_targe.target.value });
    }
    onChangeName(name){
        this.setState({vName: name.target.value});
    }
    onChangeBrand(brand){
        this.setState({vBrand: brand.target.value});
    }
    onChangeIp(ip){
        this.setState({vIp: ip.target.value});
    }
    saveTable(){
        let tables=this.state.table;
        tables.push({
            id: this.state.vId,
            name: this.state.vName,
            brand: this.state.vBrand, 
            ip: this.state.vIp
        });
        this.setState({table: tables, vId: '', vName: '', vBrand: '',vIp: ''});
    }
    render(){
        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Brand</th>
                        <th>IP Adress</th>
                    </tr>  
                </thead>
                <tbody>
                    {this.state.table.map((value, index)=>(
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.brand}</td>
                            <td>{value.ip}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <input value={this.state.vId} onChange={this.onChangeId}></input>
            <input value={this.state.vName} onChange={this.onChangeName}></input>
            <input value={this.state.vBrand} onChange={this.onChangeBrand}></input>
            <input value={this.state.vIp} onChange={this.onChangeIp}></input>
            <button onClick={() => this.saveTable()}>Save</button>
            </div>
        )
    }
}