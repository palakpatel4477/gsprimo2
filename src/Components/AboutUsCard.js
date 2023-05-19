import React from 'react';
import '../css/AboutUsCard.css';
import { NavLink } from 'react-router-dom';
const AboutUsCard = () => {
  return (
    <>
    <section className="my-section">
      <div className="left-column">
        <h2 className='centered-text'><span className='spanText'>GeoStructural </span><br/>Engineering<br/><span className='spanText'>Service</span></h2>
      </div>
      <div className="right-column">
        <p>Description of the heading goes here.Description of the heading goes here.Description of the heading goes here.Description of the heading goes here.Description of the heading goes here.Description of the heading goes here.Description of the heading goes here.</p>
        <NavLink to='aboutus'><button className="about-button">About US</button></NavLink>
      </div>
    </section>
    </>
  );
};

export default AboutUsCard;
