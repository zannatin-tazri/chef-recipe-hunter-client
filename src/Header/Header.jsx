import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../pages/Home/Home/providers/AuthProvider';
const Header = () => {
  
  const {user,logout}=useContext(AuthContext)
  console.log(user);
  const handleLogout=()=>{
       logout()
       .then(result=>{})
       .catch(error=>console.log(error));
  }
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
          {user && <span className='text-primary'>Welcome {user.email}<Button variant="dark" onClick={handleLogout}>Logout</Button></span>}

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;