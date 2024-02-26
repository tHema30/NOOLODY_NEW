// components/TailorProfile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const TailorProfile = () => {
  const { tailorId } = useParams();
  const [tailorData, setTailorData] = useState(null);

  useEffect(() => {
    // Fetch tailor data based on tailorId from the backend
    fetch(`http://localhost:7300/api/users/tailors/${tailorId}`)
      .then((response) => response.json())
      .then((data) => {
        setTailorData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [tailorId]);

  return (
    <div className="tailor-profile">
      {tailorData ? (
        <>
          <h1>{tailorData.name}'s Profile</h1>
          <p>Email: {tailorData.email}</p>
          <p>Contact: {tailorData.contact}</p>
          <p>Occupation: {tailorData.occupation}</p>
          <p>Experience: {tailorData.experience}</p>
          {/* Add more details as needed */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TailorProfile;
