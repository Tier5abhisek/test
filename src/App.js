import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Tier5, This is Abhisek Bose Automation setup along with WEBHOOK.</h2>
        </div>
        <p className="App-intro">
         It's Working..
         <button>Break the world</button>
        </p>
      </div>
    );
  }
}

export default App;
