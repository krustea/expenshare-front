import React, {Component} from 'react';
import {Button, Input, Card, CardBody, CardTitle, CardSubtitle, CardText, Container, CardImg} from 'reactstrap';
import {Redirect} from "react-router-dom";
import money from "../img/money.jpg"

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
      <Container>
        <Card>
          <CardBody>
            <CardTitle>Bienvenue sur Expenshare</CardTitle>
            <CardSubtitle>Fini les prises de tetes avec les dépenses</CardSubtitle>
            <CardText>Entrez l'identifiant de votre groupe si il est déjà créé, sinon il vous suffit d'en faire un!</CardText>

        <Input type="text" value={this.state.slug} onChange={e => this.handleChange(e)} placeholder="Group ID"/>
        <Button color="primary" onClick={e => this.handleCreate(e)}>Creér</Button>
        <Button color="success" onClick={e => this.handleOpen(e)}>Ouvrir</Button>
            <CardImg  top width="100%" src={money} alt="money" />

          </CardBody>
        </Card>
      </Container>
    );
  }
}

export default Index;