import React, { Component } from 'react';
import List from './components/list';
import Search from './components/search';
import './fonts/index.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    );
  }
}

export default App;