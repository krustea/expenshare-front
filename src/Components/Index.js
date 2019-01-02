import React, {Component} from 'react';
import {
    Button,
    Form,
    Input,
    Container,
    FormGroup
} from 'reactstrap';
import {Redirect} from "react-router-dom";
import "./index.css"

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = { slug: "", sharegroup: null };
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ slug: event.target.value });
  }

  handleCreate(event) {
    event.preventDefault();
    fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/sharegroup/', {
      method: 'POST',
      body: JSON.stringify({ slug: this.state.slug })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Nouveau groupe créé avec succès !');
      })
      .catch(err => alert('Erreur lors de la création du groupe'))
    ;
  }

  handleOpen(event) {
    event.preventDefault();
    fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/sharegroup/' + this.state.slug)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ sharegroup: JSON.parse(data) });
      })
      .catch(err => alert('Ce groupe n\'existe pas !'))
    ;
  }

  render() {

    if (this.state.sharegroup) {
      return <Redirect to={'/group/' + this.state.sharegroup.slug}/>
    }

    return (
        <div className="hp d-flex rounded">
            <Container className="d-flex justify-content-center align-items-center">
        <Form className="col-md-6 formperso text-white rounded">
          <FormGroup className="" >
            <h1>Bienvenue sur Expenshare</h1>
            <h3>Fini les prises de tetes avec les dépenses</h3>
            <p>Entrez l'identifiant de votre groupe si il est déjà créé, sinon il vous suffit d'en faire un!</p>

        <Input type="text" value={this.state.slug} onChange={e => this.handleChange(e)} placeholder="Group ID"/>
        <Button color="primary" onClick={e => this.handleCreate(e)}>Creér</Button>
        <Button color="success" onClick={e => this.handleOpen(e)}>Ouvrir</Button>

          </FormGroup>
        </Form>
            </Container>
        </div>

    );
  }
}

export default Index;