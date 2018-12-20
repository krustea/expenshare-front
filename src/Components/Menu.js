import React, {Component} from 'react';
import{NavLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    } from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }



    render() {
        return (

            <Nav className="ml-auto text-success bg-light shadow p-3 mb-5 bg-white rounded" navbar >
                <Navbar color="faded" light>
                    <NavbarBrand>Expenshare</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>

                    <NavItem><NavLink to={this.props.url}>Dashboard</NavLink></NavItem>
                    <NavItem><NavLink to={this.props.url + '/expenses'}>Dépenses</NavLink></NavItem>
                    <NavItem><NavLink to={this.props.url + '/persons'}>Personnes</NavLink></NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Nav>
        );
    }
}

export default Menu;