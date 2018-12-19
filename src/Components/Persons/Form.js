import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import Route from "react-router-dom/es/Route";

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
            <div>
            <h2>Ajout d'une personne</h2>
                <input type="text" name="firstname" value={this.state.firstname} onChange={e => this.handleChange(e)} placeholder="firstname"/>
                <input type="text" name="lastname" value={this.state.lastname} onChange={e => this.handleChange(e)} placeholder="lastname"/>
                <button onClick={e => this.handleCreate(e)}>Creér</button>
            </div>

        );
    }
}

export default Form;