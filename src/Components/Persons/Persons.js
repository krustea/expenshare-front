import React, {Component} from 'react';
import Form from "./Form"
import {Button, Table} from 'reactstrap'
import{NavLink, Route} from "react-router-dom";

class Persons extends Component {

    constructor(props) {
        super(props);
        this.state = {persons: []};

    }

    componentDidMount() {
    fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/person/group/'+ this.props.slug)
        .then(response=>response.json())
        .then(data=> this.setState({persons:data}));
    }

    handleDelete(id) {
        fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/person/', {
            method: 'DELETE',
            body: JSON.stringify({  id: id })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('personne supprimée avec succès !');
            })
            .catch(err => alert('Erreur lors de la suppression d une personne'))
        ;
    }


    render() {

        const persons = this.state.persons.map(person =>

            <tr key={person.id}>
                <td >{person.firstname}</td>
                <td>{person.lastname}</td>
               <td> {person.expenses.length} dépense(s)</td>
              <td>  {person.expenses.reduce((accumulator, expense)=>accumulator + parseFloat(expense.amount), 0)}€</td>
                <td><Button onClick={e=>this.handleDelete(person.id)}>Supprimer</Button></td>
            </tr>
            );

        return (
            <ul><h2>Personnes</h2>
                <NavLink to={this.props.match.url + '/add'}><Button>Ajouter une personne</Button></NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <Form {...props} slug={this.props.slug} /> }/>
                <Table className="table table-borderless table-dark table-hover text-center">

                    <thead>
                    <tr>
                        <th scope="row">Prenom</th>
                        <th>nom</th>
                        <th>nb de dépenses</th>
                        <th>Montant total des dépenses</th>
                    </tr>
                    </thead>
                    <tbody>
                    {persons}
                    </tbody>
                </Table>

            </ul>
        );
    }
}

export default Persons;