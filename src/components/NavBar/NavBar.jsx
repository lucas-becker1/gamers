import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import './NavBar.css';
import logo from '../../images/logo2.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div>
    <Navbar bg="light" variant="light" expand="md" collapseOnSelect>
       <Navbar.Brand className='mx-4' as={Link} to="/"> <img className='mx-1' src={logo} alt="logo"/>
            </Navbar.Brand>
            <Navbar.Toggle className='mx-2'/>
            <Navbar.Collapse>
            <Nav className="mx-auto fs-4">
                <Nav.Link  className='mx-4' as={Link} to="/productos/FIFA 22">FIFA 22</Nav.Link>
                <Nav.Link  className='mx-4' as={Link} to="/productos/NBA 2K22">NBA 2K22</Nav.Link>
                <Nav.Link  className='mx-4' as={Link} to="/productos/ELDER RING">ELDER RING</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            <NavLink as={Link} to="/cart"> <CartWidget /> </NavLink>
    </Navbar>
    </div>
 )
}

export default NavBar