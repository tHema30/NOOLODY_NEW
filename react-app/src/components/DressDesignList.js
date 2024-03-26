// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import DressDesignCard from './DressDesignCard'; // Create a DressDesignCard component for rendering individual cards
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from 'react-router-dom';

const DressDesignList = () => {
  const [dressDesigns, setDressDesigns] = useState([]);
   const {category}=useParams();
   console.log(category);
  useEffect(() => {
    // Fetch dress designs from the server
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/designs/dress-designs/cat/${category}`)
      .then(response => {
        setDressDesigns(response.data);
      })
      .catch(error => {
        console.error('Error  fetching dress designs:', error);
      });
  }, [category]);

  return (
    <>
    <Header/>
    <Container className='my-5'style={{ paddingTop: '5%' , marginRight:"190px"}}>
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
