import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="farming-container" id='home'>
      <div className="farming-content">
        <div className="text-section">
          <h1>Intelligent Farming with Square Roots</h1>
          <p>
            Our solutions empower agricultural operators, reduce operation costs, improve crop quality, and increase yield rate.
          </p>
        </div>
        <div className="image-section">
          <div className="drone"></div>
          <div className="farm"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
