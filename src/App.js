import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Index from "./Components/Index";
import './App.css';
import Sharegroup from "./Components/Sharegroup";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCoffee, faBicycle, faPlane} from '@fortawesome/free-solid-svg-icons'

library.add(faBicycle, faCoffee, faPlane)

class App extends Component {
  render() {
    return (

        <div>
        <Route path="/" exact component={Index} />
        <Route path="/group/:slug" component={Sharegroup}/>
        </div>

    );
  }
}

export default App;
