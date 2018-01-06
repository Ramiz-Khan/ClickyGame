import React, { Component } from 'react';
import logo from './components/logo.svg';
import './App.css';
import Images from './components/images';
import Counter from './components/Counter';
import Nav from './components/nav';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      
        <Header />

        <Images />

      </div>            

    );
  }
}

export default App;
