import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Chef from './Chef';


const Chefs = () => {

    const [chefs, setChefs]=useState([]);

    useEffect(()=>{
        fetch('https://chef-recipe-hunter-server-zannatin-tazri.vercel.app/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <hr />
            <h1 className='text-center fw-bold mt-5'>Amazing Chefs of Our Restaurant</h1>
            <small className='text-break text-center fst-italic fw-lighter'>Dim Sum Dynasty restaurant chefs include the Head Chef or Executive Chef, Dim Sum Chef, and Wok Chef. The Head Chef oversees the kitchen, while Dim Sum Chefs specialize in small, bite-sized dishes, and Wok Chefs excel in high-heat cooking techniques using a wok.
            Dim Sum Dynasty restaurant chefs include the Head Chef or Executive Chef, Dim Sum Chef, and Wok Chef. </small>

            <Container className='chefs-container'>
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