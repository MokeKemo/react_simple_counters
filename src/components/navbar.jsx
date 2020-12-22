import React, { Component } from 'react';

// Stateless Functional Component 
// Instead of using class (which is not wrong) more usefull is to use SFC (with sfc you can tamplate it :)

const NavBar = ({ totalCounters }) => { console.log("navbar rendered");
    return ( <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar 
        <span className="badge badge-pill badge-secondary">
            { totalCounters }
        </span> </a>
        </div>
      </nav> );
}

export default NavBar;