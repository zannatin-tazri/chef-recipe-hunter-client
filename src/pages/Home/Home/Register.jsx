import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Register = () => {
    const [error, setError]=useState('');
    const handleRegister=event=>{
        // console.log(event.target.email.value)
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        const confirm=event.target.confirm.value;
        console.log(email,password, confirm);

        if(password !==confirm){
            setError('Your password did not match')
            return
        }
        else if(password.length<6){
            setError('password must have at least 6 characters')
            return
        }
    }
    return (
        <div>
             <Container className='w-50 mx-auto my-5'>
            <h4>Please Register !!!</h4>
            <Form onSubmit={handleRegister}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name='confirm' placeholder="confirm password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept Terms and Condition" />
      </Form.Group>
      <Button variant="primary" type="submit" value='Register'>
        Register
      </Button>
    </Form>
    <small>Already have an account? <Link to='/login'>Login</Link></small>
    <p className='text-danger'>{error}</p>
        </Container>
        </div>
    );
};

export default Register;