import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';

const Login = () => {
  const {login}=useContext(AuthContext);

  const handleLogin=event=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email, password);

    login(email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser);
      form.reset();
    })
    .catch(error=>{
      console.log(error);
    })
  }
    return (
        <Container className='w-50 mx-auto my-5'>
            <h4>Please Login !!!</h4>
            <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept Terms and Condition" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <small>New to Dim Sum Dynasty? <Link to='/register'>Register</Link></small>

        </Container>
    );
};

export default Login;