import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Index from "./Components/Index";
import './App.css';
import Sharegroup from "./Components/Sharegroup";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faCoffee, faBicycle, faPlane} from '@fortawesome/free-solid-svg-icons'
import {Container} from "reactstrap";

library.add(faBicycle, faCoffee, faPlane)

class App extends Component {
  render() {
    return (

        <Container>
        <Route path="/" exact component={Index} />
        <Route path="/group/:slug" component={Sharegroup}/>
        </Container>

    );
  }
}

export default App;
