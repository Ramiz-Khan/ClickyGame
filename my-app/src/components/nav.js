import React, { Component } from 'react';
import logo from './logo.svg';
import Counter from './Counter';



const Nav = () => (

    <nav className="nav navbar">          
        
    <img src={logo} className="App-logo" alt="logo" />

    <Counter />

  </nav>
);

export default Nav;