import React, { useState } from 'react';
import './courses.css';
import CourseCard from './CourseCard';
import img1 from '../../assets/img1.jpeg'
import img2 from '../../assets/img2.jpeg'
import img3 from '../../assets/img3.jpeg'

const Courses = () => {
  const courses = [
    {
      title: "Introduction to Urban Farming",
      description: "Learn the basics of sustainable farming in city spaces.",
      image: img1,
    },
    {
      title: "Vertical Farming Techniques",
      description: "Master the art of vertical farming for maximum yield.",
      image: img2,
    },
    {
      title: "Hydroponics for Beginners",
      description: "Start growing plants without soil using hydroponics.",
      image: img3,
    },
    {
      title: "Introduction to Indoor Farming",
      description: "Start growing plants without soil using hydroponics.",
      image: img2,
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredCourses = selectedCategory === "All"
  ? courses
  : courses.filter(course => course.category === selectedCategory);

  return (
    <div id='courses'>
      <h1 className='mainh1'>Featured Courses</h1>
      <div className="filter-container mb-5">
        <label htmlFor="category">Filter by Category: </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="General">General</option>
          <option value="Vertical Farming">Vertical Farming</option>
          <option value="Hydroponics">Hydroponics</option>
        </select>
      </div>
    <div className="card-container">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          title={course.title}
          description={course.description}
          image={course.image}
        />
      ))}
        </div>
      
    </div>
  );
}

export default Courses;
