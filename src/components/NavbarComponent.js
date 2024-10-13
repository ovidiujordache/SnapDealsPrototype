 
import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartComponent from './ShoppingCartComponent'



const NavbarComponent =({children})=>{

  return(

    <>

 <Navbar >
  <Container fluid style={{backgroundColor: '#b5a869' }}>

    <Navbar.Brand as={Link} to="/">Snap Deals</Navbar.Brand>
    <Nav className="me-auto">

      <Nav.Link as={Link} to="/">Home</Nav.Link>  
    
      <Nav.Link as={Link} to="/categories">Categories</Nav.Link>

      <Nav.Link as={Link} to="/aboutus">About us</Nav.Link>
    </Nav>
      <div className="ms-auto">
          <ShoppingCartComponent />
        </div>
  </Container>
   {children} 
</Navbar>

  </>
  )
}

export default NavbarComponent;