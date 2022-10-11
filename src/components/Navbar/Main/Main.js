import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navbarr from '../Navbarr';

const Main = () => {
    return (
        <div>
          <Navbarr></Navbarr>
          
            <Outlet></Outlet>
        </div>
    );
};

export default Main;