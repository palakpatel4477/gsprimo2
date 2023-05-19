import React from 'react';
import '../css/OurProjects.css';

const ProjectCard = ({ image, title, link, services }) => {
  return (
    <div className="project-card">
      <a href={link}><img src={image} alt={title} /></a>
      <h2>{title}</h2>
      <div className='services-provided'>
        <div><span className='span-service'>Services Provided:</span></div>
        <div>
          <ul className='service-list'>
            {services.map((service) => (
              <li>{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <a id="read-link" href={link}>Read More &gt;&gt;</a>
    </div>
  );
};

export default ProjectCard;
