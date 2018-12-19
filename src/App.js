import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./Components/Index";
import './App.css';
import Sharegroup from "./Components/Sharegroup";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Route path="/" exact component={Index} />
        <Route path="/group/:slug" component={Sharegroup}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
