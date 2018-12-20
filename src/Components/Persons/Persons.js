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


    render() {

        const persons = this.state.persons.map(person =>
            <tbody>
            <tr>
                <th scope="row">{person.firstname}</th>
                <th>{person.lastname}</th>
               <th> {person.expenses.length} dépense(s)</th>
              <th>  {person.expenses.reduce((accumulator, expense)=>accumulator + parseFloat(expense.amount), 0)}€</th>
            </tr>
            </tbody>);

        return (
            <ul><h2>Personnes</h2>
                <NavLink to={this.props.match.url + '/add'}><Button>Ajouter une personne</Button></NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <Form {...props} slug={this.props.slug} /> }/>
                <Table>
                    <thead>
                    <tr>
                        <th>Prenom</th>
                        <th>nom</th>
                        <th>nb de dépenses</th>
                        <th>Montant total des dépenses</th>
                    </tr>
                    </thead>
                    {persons}
                </Table>

            </ul>
        );
    }
}

export default Persons;