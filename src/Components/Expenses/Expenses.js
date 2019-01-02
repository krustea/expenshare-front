import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import Form from "./Form";
import Moment from 'react-moment';
import {Button, Table} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from "react-bootstrap/es/Badge";

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

    handleDelete(id) {
        fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/expense/', {
            method: 'DELETE',
            body: JSON.stringify({  id: id })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Dépense supprimée avec succès !');
            })
            .catch(err => alert('Erreur lors de la suppression d une dépense'))
        ;
    }


    render() {
        const expenses= this.state.expense.map(expenses=>

            <tr key={expenses.id}>
                <td>{expenses.title}</td>
                <td>{expenses.category.label}<Badge><FontAwesomeIcon icon={expenses.category.icon}/></Badge></td>
                <td>{expenses.amount} €</td>
                <td>{expenses.person.firstname} {expenses.person.lastname}</td>
                <td><Moment format="YYYY/MM/DD">{expenses.createdAt}</Moment></td>
                <td><Button onClick={e=>this.handleDelete(expenses.id)}>Supprimer</Button></td>
            </tr>



        );

        return (
            <div>
                <h1>Dépense du groupe</h1>
                <NavLink to={this.props.match.url + '/add'}><Button>Ajouter une dépense</Button></NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <Form {...props} slug={this.props.slug} /> }/>

                <Table className="table table-borderless table-dark table-hover text-center shadow p-3 mb-5">
                    <thead>
                    <tr>
                        <th scope="row">Titre de la dépense</th>
                        <th>Catégorie</th>
                        <th>Montant</th>
                        <th>Utilisateur</th>
                        <th>Date de la dépenses</th>
                    </tr>
                    </thead>
                    <tbody>
                    {expenses}
                    </tbody>
                </Table>
                {/* Afficher la liste des dépenses */}
            </div>
        );
    }

}

export default Expenses;