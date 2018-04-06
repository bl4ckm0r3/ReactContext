import React, { Component } from 'react';
import './App.css';
import Cascade from "./Cascade";
import { Context } from './Context';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Context />
       <Cascade />
      </div>
    );
  }
}

export default App;
