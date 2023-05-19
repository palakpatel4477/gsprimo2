import React from 'react'
import "../css/Contact.css";
import Map from '../images/maps1.png'
import ContactCard from '../Components/ContactCard';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faMap,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Footer from '../Components/Footer';


const Contact = () => {
  return (
    <>
      {/* <div className="image-container-contact"> */}
        {/* <div className="overlay-contact"></div> */}
        {/* <img src={Image} alt="image-description-contact" />
        <div className="text-container-contact">
          <h1>Contact</h1>
        </div>
      </div> */}
      <section className="hero-contact">
        <div className="overlay-services"></div>
        <div className="text-container-project">
          <h1>Contact</h1>
        </div>
      </section>
      {/* <ContactCard /> */}
      <h2 className='contact-text'><span className='span-text-aboutusDesc'> </span>Contact us for inquiries.</h2>
      <div className='contact-main'>
        <div className="contact-container">          
          <div className="contact-column">
            <h3><FontAwesomeIcon icon={faPhone} /></h3>
            <p>(519) 871-3234</p>
          </div>
          <div className="contact-column">
            <h3><FontAwesomeIcon icon={faEnvelope} /></h3>
            <p>info@gsprimo.com</p>
          </div>
          <div className="contact-column">
            <h3><FontAwesomeIcon icon={faMap} /></h3>
            <p>1804 Downes Ct.,<br/>London ON, N6G 5E8</p>
            
          </div>
        </div>
      </div>
      <div className="image-container-map">
        <div className="overlay-map"></div>
        <img src={Map} alt="image-description-map" />
      </div>
      <Footer/>
    </>
  )
}

export default Contact