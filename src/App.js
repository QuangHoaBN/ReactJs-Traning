import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Footer, Content} from './views';
import AppRoute from './route/AppRoute.js';
class App extends React.Component {
  render(){
    return (
     <div>
        {/* <Header/>
        <Content/>
        <Footer/> */}
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img width='100px' src={logo}></img>
        <AppRoute />
        </div>
      )
  }
}

export default App;
