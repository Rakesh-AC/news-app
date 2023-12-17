import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  c = "Jhon";
  render() {
    return (
      <div>
        <h1>This is a class based component {this.c}</h1>
      </div>
    )
  }
}

