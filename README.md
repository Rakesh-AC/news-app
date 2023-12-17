# NewsApp
## #22 getting started with news app
### creating a new react app by npx
npx create-react-app newsapp

### changing app.js function based component to class based component
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

### creating an account with newsapi.com for freenews api
https://newsapi.org/docs/get-started



