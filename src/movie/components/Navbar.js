import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
const NavbarPage = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <NavLink to="/">Movie</NavLink>
        <Nav className="mr-auto">
          <NavLink to="/popular-movie">Popular movies</NavLink>
          <NavLink to="/upcoming-movie">Upcoming movies</NavLink>
          <NavLink to="/search-movie">Search</NavLink>
        </Nav>
      </Navbar>
    </>
  )
}
export default NavbarPage;