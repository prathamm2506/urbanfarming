import React from 'react';
import './Us.css'; // Create this CSS file for styles
import img1 from '../../assets/leaf.png'

const AgricultureComponent = () => {
  return (
    <div className="agriculture-container">
      <div className="left-section">
        <h1 className="title">
          Leverage the most flexible platform in indoor agriculture.
        </h1>
        <p className="description">
          Food providers, farmers, researchers and inventors all partner with
          Square Roots when their big ideas are ready to grow. Our climate-smart
          indoor farming platform is built to help innovative thinkers unleash
          high-impact solutions to secure the future of food and beyond.
        </p>
        <button className="contact-button">Contact Us →</button>
      </div>
      <div className="right-section">
        <img src={img1} alt="Leaf" className="leaf-image" />
        <div className="features">
          <div className="feature">
            <h3>COMMERCIALLY PROVEN FACILITIES</h3>
            <p>
              Grow crops immediately at one of our modular indoor farms, complete with
              hydroponic systems and state-of-the-art monitoring. Start with the
              space you need, then scale up when you're ready.
            </p>
          </div>
          <div className="feature">
            <h3>COMPREHENSIVE FARM SOFTWARE</h3>
            <p>
              Our custom-built software provides total control for every project,
              enabling precise environmental recipe design while guiding growers
              through every task from seed to harvest.
            </p>
          </div>
          <div className="feature">
            <h3>INTELLIGENCE AND INSIGHT</h3>
            <p>
              From experienced growers and biosystems engineers to operations
              specialists and carbon accountants, our team works in harmony with
              our technology to collect the right information to meet your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureComponent;
