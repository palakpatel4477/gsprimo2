import React from 'react';
import '../css/ProjectSection.css'
import Project1 from '../images/1.1.jpeg'
import Project2 from '../images/1.1.jpeg'
import Project3 from '../images/1.1.jpeg'
import Project4 from '../images/1.1.jpeg'

const ProjectSection = () => {
  return (
    <div className="container-project">
      <div className="centered-section">
        <h2><span className='span-text'>Our</span> Projects</h2>
        <p>Description of our projects</p>
      </div>
      <div className="card-grid2">
        <div className="card2">
          <img src="https://via.placeholder.com/300x450" alt="Project 1" />
        </div>
        <div className="card2">
          <img src="https://via.placeholder.com/300x450" alt="Project 2" />
        </div>
        <div className="card2">
          <img src="https://via.placeholder.com/300x450" alt="Project 3" />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
