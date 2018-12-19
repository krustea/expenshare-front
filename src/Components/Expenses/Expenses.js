import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Form from "./Form";

class Expenses extends Component {

    constructor(props) {
        super(props);
        this.state = {expense: []};
    }


    componentDidMount() {
        fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/expense/group/' + this.props.slug, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({expense: data}));

    }

    render() {


        return (
            <div>
                <h1>Expenses</h1>
                <NavLink to={this.props.match.url + '/add'}>Ajouter une dépense</NavLink>
                <Route path={this.props.match.url + '/add'} component={Form}/>


                {/* Afficher la liste des dépenses */}
            </div>
        );
    }

}

export default Expenses;