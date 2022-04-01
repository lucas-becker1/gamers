import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';
import logo from '../../images/logo2.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <header className="header">
            
        <Link className="header-link" as={Link} to="/"> <img src={logo} alt="logo"/></Link>

        <nav className="header-nav">
            <CartWidget/>
            <Link className="header-link" to="/productos/FIFA 22">FIFA 22</Link>
            <Link className="header-link" to="/productos/NBA 2K22">NBA 2K22</Link>
            <Link className="header-link" to="/productos/ELDER RING">ELDER RING</Link>
            
        </nav>
    </header>
  );
};

export default NavBar