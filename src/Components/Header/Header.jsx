import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { HashLink } from "react-router-hash-link";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './../../images/logo.png'
import './Header.css'
const Header = () => {
  const [navbarColor, setNavbarColor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
    
    <Navbar bg="none" expand="lg" 
      fixed={"top"}
      className={navbarColor ? "navbar active" : "navbar"}
      >
      <Container>
        <Navbar.Brand  href="#home"><img src={logo} className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
    
           
            <Nav.Link href="#takeMoment">About Us</Nav.Link>
            <Nav.Link href="#service">Services</Nav.Link>
            <Nav.Link href="#ourProcess">Our Process</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header