import React, { Component } from 'react';
import Header from "./components/Header"
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Searchbox from './components/Searchbox';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Searchbox/>
      </div>
    );
  }
}

export default App;
