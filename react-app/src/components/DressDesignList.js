// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import DressDesignCard from './DressDesignCard'; // Create a DressDesignCard component for rendering individual cards
import Header from "./Header";
import Footer from "./Footer";

const DressDesignList = () => {
  const [dressDesigns, setDressDesigns] = useState([]);

  useEffect(() => {
    // Fetch dress designs from the server
    axios.get('http://localhost:7300/api/designs/dress-designs')
      .then(response => {
        setDressDesigns(response.data);
      })
      .catch(error => {
        console.error('Error fetching dress designs:', error);
      });
  }, []);

  return (
    <>
    <Header/>
    <Container className='my-5'>
      <Row xs={1} md={2} lg={3} className='g-4'>
        {dressDesigns.map(dressDesign => (
          <DressDesignCard key={dressDesign._id} dressDesign={dressDesign} />
        ))}
      </Row>
    </Container>
    <Footer/>
    </>
  );
};


export default DressDesignList;
