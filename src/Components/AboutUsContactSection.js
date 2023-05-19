import React from 'react';
import '../css/AboutUsContactSection.css';

function AboutUsContactSection() {
  return (
    <div className='maindiv'>
        <div className='overlay-contact'></div>
          <section className="section-contact2">
              <h2 className="section-heading">Partner With us Today!</h2>
              <p className="section-description">
                Exceptional Services Beyond Your Expectations.
              </p>
              {/* <NavLink to='contact'><button className="contact-button">Contact Us</button></NavLink> */}
              <a href='/contact'><button className="contact-button">Contact Us</button></a>
          </section>
    </div>
  );
}

export default AboutUsContactSection;
