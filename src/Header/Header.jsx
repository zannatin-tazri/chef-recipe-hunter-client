import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../pages/Home/Home/providers/AuthProvider';
const Header = () => {
  
  const {user}=useContext(AuthContext)
  console.log(user)
    return (

      
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dim Sum Dynasty</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ms-5">
            <Link className='me-3' to='/'><Button  variant="dark"> Home</Button></Link>
            <Link to='/blog'><Button  variant="dark"> Blog</Button></Link>
            <Link to='/contact'><Button  variant="dark"> Contact</Button></Link>
            
          </Nav>
          <Nav className=''>
          <Link to='/login'><Button variant="dark" >Login</Button> </Link> 
          <Link to='/register'><Button variant="dark" >Register</Button> </Link> 
          {user && <span className='text-primary'>Welcome {user.email}</span>}

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;