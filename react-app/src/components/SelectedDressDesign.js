// src/components/SelectedDressDesign.js
import React from 'react';

const SelectedDressDesign = ({ selectedDressDesign }) => {
  if (!selectedDressDesign || !selectedDressDesign.designImage) {
    return null; // If no dress design or image is selected, don't render anything
  }

  const { designImage, category, description } = selectedDressDesign;

  return (
    <div className="selected-dress-design">
      <img src={designImage.url} alt={category} style={{ maxWidth: '100%' }} />
      <p>{description}</p>
    </div>
  );
};

export default SelectedDressDesign;
