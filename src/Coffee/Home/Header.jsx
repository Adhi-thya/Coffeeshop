import React from 'react'
import './Header.css'
import Hero from './Hero'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Header = () => {
  return (
    <div >
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='coffee-shop'>Coffee shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flexCenter h-menu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#home">About us</Nav.Link>
            <NavDropdown title="Contact us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Address</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Call
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Mail</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link href="#link">Sign in</Nav.Link>
            <button className='btn btn-success'>
                    Sign up
                </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Hero/>
    </div>
  )
}

export default Header
