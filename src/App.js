import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Footer, Content} from './views';
import AppRoute from './route/AppRoute.js';
import {ChildrenA, ChildrenAB} from './ex_redux';
import Parent from "./redux/containers/HomePage";

import { Provider } from "react-redux";
import store from "./redux/store";

class App extends React.Component {
  render(){
    return (
     <div>
       <Provider store={store}>
          <Parent />
       </Provider>
     </div>
      )
  }
}

export default App;
