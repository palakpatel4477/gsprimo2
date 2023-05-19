import React from 'react';
import '../css/AboutUsCard.css';

const ServicesCard = () => {  
  return (
    <>
        {/* <div className="image-container">
            <div className="overlay-services"></div>
            <img src={Service2} alt="image-description" />
            <div className="text-container">
                <h1 className='services-header'>Services</h1>
            </div>
        </div> */}
        <section className="hero-service">
            <div className="overlay-services"></div>
            <div className="text-container-project">
                <h1>Services</h1>
            </div>
        </section>
    </>
    
    
  );
};

export default ServicesCard;
