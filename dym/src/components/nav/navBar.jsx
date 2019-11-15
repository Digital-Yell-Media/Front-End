import React from 'react';
import NavLink from './NavLink.jsx';
import './nav.sass';


function NavBar() {
  return (
    <ul className="navigation grid grid-gutters large-grid-fit med-grid-fit small-grid-1of2">
      <NavLink className="navigation-link" to="/" brand>Home</NavLink>
      <NavLink className="navigation-link" to="/services">Services</NavLink>
      <NavLink className="navigation-link" to="/work">Work</NavLink>
      <NavLink className="navigation-link" to="/contact">Contact</NavLink>
    </ul>
  );
}

export default NavBar