import React from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


const ViewRecipe = ({viewRecipe}) => {
    console.log(viewRecipe);

    
    return (
        <Container>
           <CardGroup>
      <Card className='m-3 text-center'>
        <Card.Img className='w-75 rounded mx-auto mt-3 d-block' variant="top" src={viewRecipe.recipes[0].photo} />
        <Card.Body>
          <Card.Title>{viewRecipe.recipes[0].name}</Card.Title>
          <Card.Text>
            <small className='fw-light'><span className='fw-semibold'>Ingredients: </span> {viewRecipe.recipes[0].ingredients[0]}, {viewRecipe.recipes[0].ingredients[1]},
            {viewRecipe.recipes[0].ingredients[2]},
            {viewRecipe.recipes[0].ingredients[3]},{viewRecipe.recipes[0].ingredients[5]},{viewRecipe.recipes[0].ingredients[6]},
            {viewRecipe.recipes[0].ingredients[7]},{viewRecipe.recipes[0].ingredients[8]}</small>
          </Card.Text>
          <Card.Text>
          <small className='fw-light'><span className='fw-semibold'> Method: </span>{viewRecipe.recipes[0].method}</small>
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card  className='m-3 text-center'>
        <Card.Img className='w-75 rounded mx-auto mt-3 d-block' variant="top" src={viewRecipe.recipes[1].photo} />
        <Card.Body>
          <Card.Title>{viewRecipe.recipes[1].name}</Card.Title>
          <Card.Text>
            <small className='fw-light'><span className='fw-semibold'>Ingredients: </span>{viewRecipe.recipes[1].ingredients[0]}, {viewRecipe.recipes[1].ingredients[1]},
             {viewRecipe.recipes[1].ingredients[2]},
             {viewRecipe.recipes[1].ingredients[3]}, {viewRecipe.recipes[1].ingredients[5]}, {viewRecipe.recipes[1].ingredients[6]}</small>
          </Card.Text>
          <Card.Text>
          <small className='fw-light' > <span className='fw-semibold'> Method: </span>{viewRecipe.recipes[1].method}</small>
          </Card.Text>
          
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card  className='m-3 text-center'>
        <Card.Img className='w-75 rounded mx-auto mt-3 d-block' variant="top" src={viewRecipe.recipes[2].photo} />
        <Card.Body>
          <Card.Title>{viewRecipe.recipes[2].name}</Card.Title>
          <Card.Text>
            <small className='fw-light'><span className='fw-semibold'>Ingredients: </span> {viewRecipe.recipes[2].ingredients[0]}, {viewRecipe.recipes[2].ingredients[1]},
             {viewRecipe.recipes[2].ingredients[2]},
             {viewRecipe.recipes[2].ingredients[3]}, {viewRecipe.recipes[2].ingredients[5]}, {viewRecipe.recipes[2].ingredients[6]}</small>
          </Card.Text>
          <Card.Text>
            <small className='fw-light'><span className='fw-semibold'> Method: </span>{viewRecipe.recipes[2].method}</small>
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      
    
        </Container>
    );
};

export default ViewRecipe;