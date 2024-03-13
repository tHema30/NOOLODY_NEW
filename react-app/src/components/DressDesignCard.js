import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DressDesignCard = ({ dressDesign }) => {
  
  const orderLocalChange = () => {
    localStorage.setItem("order", JSON.stringify({...dressDesign}));
  };

  
  return (
    
    <Card className="card1 custom-rounded-" style={{ width: '18rem' }} >
      <Card.Img
        variant="top"
        src={dressDesign.designImage.url}
        alt={dressDesign.category}
        className="custom-rounded-image" // Apply the custom CSS class
      />
      
      <Card.Body>
        <Card.Title>{dressDesign.category}</Card.Title>
        {/* <Card.Text>{dressDesign.description}</Card.Text> */}
       <Card.Text>{dressDesign.price}</Card.Text>
       <Link to='/orderone'>
        <Button variant="primary" onClick={orderLocalChange} >Order Now</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default DressDesignCard;
