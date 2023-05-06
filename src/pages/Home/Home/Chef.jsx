import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';


const Chef = (props) => {
    console.log(props.chef);
    const {name,id,likes,picture,numberOfRecipes,yearsOfExperience}=props.chef;
    
    return (
        <div className='m-5 '> 
         <Row lg={1} md={2} className="g-4">
      {Array.from({ length: 1 }).map((_3, id) => (
        <Col>
          <Card className='p-5'>
            <Card.Img className='rounded' variant="top" src={picture} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text className='d-flex justify-content-between'>
                <h3>Recipes : {numberOfRecipes} </h3> 
                <h3><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> {likes} Likes</h3>
              </Card.Text>
              <Card.Text  className='d-flex justify-content-between'>
                <h5>{yearsOfExperience} Years Experience</h5>
                <Button variant="dark" className="text-center">View Details</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

      
        </div>
    );
};

export default Chef;