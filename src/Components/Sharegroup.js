import React, {Component} from 'react';
import Expenses from "./Expenses/Expenses";
import Menu from "./Menu";
import Route from "react-router-dom/es/Route";
import Dashboard from "./Dashboard/Dashboard";
import Persons from "./Persons/Persons"


class Sharegroup extends Component {




    render() {


        return (
            <div>
                <h1>{this.props.match.params.slug}</h1>
                <Menu url={this.props.match.url}/>
                <Route path={this.props.match.url + '/expenses'} render={props=><Expenses {...props} slug={this.props.match.params.slug}/>}/>
                <Route path={this.props.match.url + '/persons'} render={props=><Persons {...props} slug={this.props.match.params.slug}/>}/>
                <Route path={this.props.match.url } exact component={Dashboard}/>

            </div>
        );
    }
}

export default Sharegroup;