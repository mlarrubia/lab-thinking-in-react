import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './components/filterableproducttable/FilterableProductTable.js';
import dataJSON from './data.json';


class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={ dataJSON } />
    </div>
    );
  }
}

export default App;
