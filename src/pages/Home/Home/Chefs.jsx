import React, { useEffect, useState } from 'react';

const Chefs = () => {

    const [chefs, setChefs]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>console.log(chefs))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h3>Chefs info</h3>
        </div>
    );
};

export default Chefs;