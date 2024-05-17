import React from 'react';
import { Link } from 'react-router-dom';

const Cusnavbar = () => {
  return (
    <div className="container-fluid fixed-top">
    <div className="row">
        <div className="col-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="service">Service</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="props">Props</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="forms">forms</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="chart">charts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="lazyloding">lazy</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="reduxpage">reduxpage</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name='user' />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>
  )
}

export default Cusnavbar