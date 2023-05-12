import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ViewRecipe from './ViewRecipe';

const ViewRecipes = () => {

    const [viewRecipes, setViewRecipes]=useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/view-recipes`)
        .then(res=>res.json())
        .then(data=>setViewRecipes(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <h1 className='text-center my-3 fst-italic'>Details of The Recipes</h1>
           {
            viewRecipes.map(viewRecipe=> <ViewRecipe
             key={viewRecipe.id}
             viewRecipe={viewRecipe}
            >

            </ViewRecipe>)
           }
        </div>
    );
};

export default ViewRecipes;