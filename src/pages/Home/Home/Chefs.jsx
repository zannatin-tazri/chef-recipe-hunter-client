import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from './Chef';

const Chefs = () => {

    const [chefs, setChefs]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h2>Our Chefs</h2>

            <Container>
                 {
                     chefs.map(chef=><Chef
                     key={chef.id}
                     chef={chef}
                     ></Chef>)
                 }
            </Container>
           
        </div>
    );
};

export default Chefs;