import React, { Component } from 'react';
import Header from './header/header';
import Navigation from '../router/router';


export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header />
        <Navigation />
      </div>
    );
  }
}
