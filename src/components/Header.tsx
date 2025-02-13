import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Coffee } from 'lucide-react'; // Keep the Coffee icon as is
import CartIcon from './CartIcon';  // Import the CartIcon component

const Header: React.FC = () => {
  return (
    <Navbar bg="white" expand="md" className="border-bottom shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <Coffee className="me-2" />
          <span className="fw-bold">Coffee Shop</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/menu" className="text-dark">Menu</Nav.Link>
            <Nav.Link as={Link} to="/cart" className="text-dark">
              <CartIcon /> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
