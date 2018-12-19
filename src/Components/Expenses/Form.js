import React, {Component} from 'react';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state ={title:"", amount:"", categories:[] ,persons:[] , category: null, person: null}
    }

    componentDidMount() {
        fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/category', {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({categories: data}));

        fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/person/group/' + this.props.slug, {
            method: 'GET',
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({persons: data}));


    }

    handleChange(event) {
        event.preventDefault();
        const column = event.target.name;

        this.setState({ [column]: event.target.value });
    }

    handleCreate(event) {
        event.preventDefault();
        fetch('http://localhost:8888/dcdev/javascript/expenshare/expenshare-back/public/expense/', {
            method: 'POST',
            body: JSON.stringify({ title: this.state.title, amount: this.state.amount, category: this.state.category, person: this.state.person })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert('Nouvelle dépense créée avec succès !');
            })
            .catch(err => alert('Erreur lors de la création d une dépense'))
        ;
    }


    render() {
        const persons = this.state.persons.map(per=><option value={per.id} key={per.id}>{per.firstname}{per.lastname}</option>)
        const categories = this.state.categories.map(cat=><option value={cat.id} key={cat.id}>{cat.label}</option>);
        return (
            <div>
                <h2>Ajout d'une dépense</h2>
                {console.log(this.state)}
                <input type="text" name="title" value={this.state.title} onChange={e => this.handleChange(e)} placeholder="title"/>
                <input type="text" name="amount" value={this.state.amount} onChange={e => this.handleChange(e)} placeholder="amount"/>
                <select name="person" onChange={e=>this.handleChange(e)}>
                    {persons}
                </select>
                <select name="category" value={this.state.category} onChange={e => this.handleChange(e)}>
                    {categories}
                </select>
                <button value={this.state.person} onClick={e => this.handleCreate(e)}>Creér</button>
                
            </div>
        );
    }
}

export default Form;