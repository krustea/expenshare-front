import React, {Component} from 'react';

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
                {person.firstname}
                {person.expenses.length} dépense(s)
                {person.expenses.reduce((accumulator, expense)=>accumulator + parseFloat(expense.amount), 0)}
            </li>);

        return (
            <ul>
                {persons}
            </ul>
        );
    }
}

export default Persons;