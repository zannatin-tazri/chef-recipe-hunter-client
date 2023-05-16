import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ViewRecipe from './ViewRecipe';

const ViewRecipes = () => {

    const [viewRecipes, setViewRecipes]=useState([]);

    useEffect(()=>{
        fetch(`https://chef-recipe-hunter-server-zannatin-tazri.vercel.app/view-recipes`)
        .then(res=>res.json())
        .then(data=>setViewRecipes(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div className='mt-5 p-3'>
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