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
      <Nav.Link  href="#homt45rte"><p className="nav-p ">Home</p></Nav.Link>
      <Nav.Link  href="#hh65ome"><p className="nav-p">About</p></Nav.Link>
      <Nav.Link  href="#homye"><p className="nav-p">Services</p></Nav.Link>
      <Nav.Link  href="#ho4rt4me"><p className="nav-p">Protfolio</p></Nav.Link>
      <Nav.Link  href="#homtge"><p className="nav-p">Blog</p></Nav.Link>
      <Nav.Link  href="#hot4rtgfme"><p className="nav-p">Contact Me</p></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
      </div>
    )
}

export default nav
