import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import './App.css';

class App extends Component {
  foo = () => 'Bars';
  // Método del Lifecycle de React render()
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Users />
        </div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
