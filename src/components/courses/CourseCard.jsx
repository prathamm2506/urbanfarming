import React from 'react';
import './CourseCard.css';  // Import the CSS file

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="card-button">Learn More</button>
      </div>
    </div>
  );
};

export default CourseCard;