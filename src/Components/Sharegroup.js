import React, {Component} from 'react';
import Expenses from "./Expenses/Expenses";
import Menu from "./Menu";
import Route from "react-router-dom/es/Route";
import Dashboard from "./Dashboard/Dashboard";
import Persons from "./Persons/Persons"
import {Container} from "reactstrap";


class Sharegroup extends Component {




    render() {


        return (
            <div>

                <Menu url={this.props.match.url}/>
                <Container>
                    <h1 className="text-center">Gestion du groupe  : {this.props.match.params.slug}</h1>
                <Route path={this.props.match.url } exact component={Dashboard}/>
                <Route path={this.props.match.url + '/expenses'} render={props=><Expenses {...props} slug={this.props.match.params.slug}/>}/>
                <Route path={this.props.match.url + '/persons'} render={props=><Persons {...props} slug={this.props.match.params.slug}/>}/>
                </Container>

            </div>
        );
    }
}

export default Sharegroup;