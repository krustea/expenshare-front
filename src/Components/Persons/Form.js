import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import Route from "react-router-dom/es/Route";
import {Input, Button, Container} from "reactstrap";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state={firstname : "", lastname:""};
    }

    handleChange(event) {
        event.preventDefault();
        const column =event.target.name;

        this.setState({ [column]: event.target.value });
    }




    handleCreate(event) {
        event.preventDefault();
        fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/person/', {
            method: 'POST',
            body: JSON.stringify({ firstname: this.state.firstname, lastname: this.state.lastname, slug: this.props.slug })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouvelle personne créée avec succès !');
            })
            .catch(err => alert('Erreur lors de la création d une personne'))
        ;
    }



    render() {


        return (
            <Container>
            <h2>Ajout d'une personne</h2>
                <Input type="text" name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)} placeholder="Prénom"/>
                <Input type="text" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} placeholder="Nom"/>
                <Button onClick={e => this.handleCreate(e)}>Creér</Button>
            </Container>

        );
    }
}

export default Form;