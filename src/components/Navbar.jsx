import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <div className="px-5 bg-light">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='./logo-gamers.png' width='80'/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TIENDA</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SALE</a>
                        </li>
                    </ul>
                </div>
            </div>
        <CartWidget/>
        </nav>
    </div>
  )
}

export default Navbar