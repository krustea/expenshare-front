import React, {Component} from 'react';
import{NavLink} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

class Menu extends Component {
    render() {
        return (

            <nav>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>Menu</NavbarBrand>
                    <NavItem><NavLink to={this.props.url}>Dashboard</NavLink></NavItem>
                    <NavItem><NavLink to={this.props.url + '/expenses'}>Dépenses</NavLink></NavItem>
                    <NavItem><NavLink to={this.props.url + '/persons'}>Personnes</NavLink></NavItem>
                </Navbar>
            </nav>
        );
    }
}

export default Menu;