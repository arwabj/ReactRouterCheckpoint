import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div style={{marginBottom:'4%'}}>
           <Navbar bg="light" variant="light">
        <Container>
          
          <Navbar.Brand href="/">Movie App with router</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
        </div>
    );
};

export default NavBar;