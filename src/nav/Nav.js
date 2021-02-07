import React from 'react'
import {Navbar,Nav,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Logo from '../images/logo.png';
import './nav.css';

function nav() {
    return (

      <div style={{zIndex:"9999",position:"fixed",background:"white"}}  className="col-md-12">
              <div className="container">
<Navbar  expand="lg">
  <Navbar.Brand href="#home"><img style={{height:"40px"}} src={Logo}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link  > <Link to="/" style={{color:"gray"}}><p className="nav-p">Home</p></Link></Nav.Link>
    <Nav.Link  > <Link to="/about" style={{color:"gray"}}><p className="nav-p">About</p></Link></Nav.Link>
    <Nav.Link  > <Link to="/services" style={{color:"gray"}}><p className="nav-p">Services</p></Link></Nav.Link>
      <Nav.Link  > <Link to="/protfolio" style={{color:"gray"}}><p className="nav-p">Protfolio</p></Link></Nav.Link>
      <Nav.Link  > <Link to="/blog" style={{color:"gray"}}><p className="nav-p">Blog</p></Link></Nav.Link>
      <Nav.Link  > <Link to="/contact" style={{color:"gray"}}><p className="nav-p">Contact</p></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
      </div>
    )
}

export default nav
