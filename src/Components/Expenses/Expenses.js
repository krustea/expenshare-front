import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Form from "./Form";
import Moment from 'react-moment';
import {Button, Table} from "reactstrap";

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
        const expenses= this.state.expense.map(expenses=>
            <tbody>
            <tr>
                <th scope="row">{expenses.title}</th>
                <th>{expenses.category.label}</th>
                <th>{expenses.amount}</th>
                <th><Moment format="YYYY/MM/DD">{expenses.createdAt}</Moment></th>

            </tr>
            </tbody>


        );

        return (
            <div>
                <h1>Expenses</h1>
                <NavLink to={this.props.match.url + '/add'}><Button>Ajouter une dépense</Button></NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <Form {...props} slug={this.props.slug} /> }/>

                <Table>
                    <thead>
                    <tr>
                        <th>Titre de la dépense</th>
                        <th>Catégorie</th>
                        <th>Montant</th>
                        <th>Date de la dépenses</th>
                    </tr>
                    </thead>
                    {expenses}
                </Table>
                {/* Afficher la liste des dépenses */}
            </div>
        );
    }

}

export default Expenses;