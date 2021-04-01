import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  foo = () => 'Bars';
  // Método del Lifecycle de React render()
  render() {
    return (
      <div className='App'>
        <Navbar />
        <UserItem />
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
