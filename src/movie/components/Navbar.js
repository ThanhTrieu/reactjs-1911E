import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavbarPage = () => {
  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Movie</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Popular movies</Nav.Link>
          <Nav.Link href="#features">Upcoming movies</Nav.Link>
          <Nav.Link href="#pricing">Search</Nav.Link>
        </Nav>
      </Navbar>
    </>
  )
}
export default NavbarPage;