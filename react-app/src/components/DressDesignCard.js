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
       <Card.Title>{dressDesign.price} LKR</Card.Title>
       <Link to='/orderone'>
        <Button variant="primary" onClick={orderLocalChange} className='ordernow'>Order Now</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default DressDesignCard;
