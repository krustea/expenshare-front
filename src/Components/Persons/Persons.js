import React, {Component} from 'react';
import Form from "./Form"
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
            <li>
                {person.firstname}<br/>
                {person.expenses.length} dépense(s)
                {person.expenses.reduce((accumulator, expense)=>accumulator + parseFloat(expense.amount), 0)}
            </li>);

        return (
            <ul><h2>Dépenses</h2>
                <NavLink to={this.props.match.url + '/add'}>Ajouter une personne</NavLink>
                <Route path={this.props.match.url + '/add'} render={props => <Form {...props} slug={this.props.slug} /> }/>

                {persons}
            </ul>
        );
    }
}

export default Persons;