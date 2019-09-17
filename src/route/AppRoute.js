import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Header, Footer, Content} from '../views';
import ListDevice from '../views/content/ListDevice.js';
import Table from '../views/content/Table.js';

function AppRoute() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about/">About</Link>
                        </li>
                        <li>
                            <Link to="/users/">Users</Link>
                        </li>
                        <li>
                            <Link to="/topics/">Topics</Link>
                        </li>
                        <li>
                            <Link to="/items/">Table</Link>
                        </li>
                    </ul>
                </nav>
                <Route path='/' exact component={Index}></Route>
                <Route path='/about/' component={About}></Route>
                <Route path='/users/' component={Users}></Route>
                <Route path='/topics/' component={Topics}></Route>
                <Route path='/items/' component={ListTable}></Route>
            </div>
        </Router>
    )
}
function Index(){
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}
function ListTable() {
    return (
        <div>
            <Table />
        </div>
    );
}
function About(){
    return <h2>About</h2>
}
function Users(){
    return (
        <div>
            <ListDevice />
        </div>
    );
}
function Topics(){
    return <h2>Topics</h2>
}

export default AppRoute;