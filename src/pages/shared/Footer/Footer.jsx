import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='p-5 bg-dark mt-5 px-5 text-secondary text-center'>
           <div className=''>
            <h2>About Us</h2>
           <p className='text-break'>Dim Sum Dynasty restaurant chefs include the Head Chef or Executive Chef, 
                Dim Sum Chef, and Wok Chef. The Head Chef oversees the kitchen, while Dim 
                Sum Chefs specialize in small, bite-sized dishes, and Wok Chefs excel in high-heat
                 cooking techniques using a wok. Dim Sum Dynasty restaurant chefs include the Head Chef or Executive Chef, Dim Sum Chef, and Wok Chef. The Head Chef oversees the kitchen, while Dim Sum Chefs specialize in small, 
                 bite-sized dishes, and Wok Chefs excel in high-heat cooking techniques using a wok.
</p>
            <h2>Links</h2> 
            <Link  to='/'><Button className='text-secondary' variant="dark" >Home</Button></Link>
            <Link className='text-secondary'> <Button className='text-secondary' variant="dark" >About</Button></Link> 
            <Link className='text-secondary' to='/blog'><Button className='text-secondary' variant="dark" >Blog</Button></Link>

            <h2 >Contact Now</h2>
            <p>Dim Sum Synasty Restaurant
              123 Main Street,
              Beijing, China</p>
              <p>Phone : +88 01750 000 000 <br />
                 +88 01750 000 000</p>
                 <p>Email :  info@dimsumdynastyrestaurant.com</p>
           </div>
            
        </div>
        
    );
};

export default Footer;