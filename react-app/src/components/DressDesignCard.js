import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DressDesignCard = ({ dressDesign }) => {
  return (
    
    <Card className="card custom-rounded-" style={{ width: '18rem' }} >
      <Card.Img
        variant="top"
        src={dressDesign.designImage.url}
        alt={dressDesign.category}
        className="custom-rounded-image" // Apply the custom CSS class
      />
      <Card.Body>
        {/* <Card.Title>{dressDesign.category}</Card.Title> */}
        {/* <Card.Text>{dressDesign.description}</Card.Text> */}
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default DressDesignCard;
