import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header, Footer, Content} from './views'
class App extends React.Component {
  render(){
    return (
     <div>
        <Header/>
        <Content/>
        <Footer/>
        </div>
      )
  }
}

export default App;
