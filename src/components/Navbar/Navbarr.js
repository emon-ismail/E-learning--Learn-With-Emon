import React, { useState } from 'react';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Navbarr = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className='fw-bolder ms-5'>
            <h1>Learn With Emon</h1>
        </div>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
          </ul>
        
          <div className='me-5'>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className=" nav-link active" aria-current="page" to="/home">Home </NavLink>
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link active" aria-current="page" to="/home">Topics </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/statics">Statics</NavLink>
            </li>

            <li className="nav-item">
            <NavLink  className="nav-link active" aria-current="page" to="/blog">Blog</NavLink>
            </li>
          </ul>
          </div>
        </div>
      </div>
      
    </nav>
    
    
    );
};

export default Navbarr;