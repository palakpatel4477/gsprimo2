import React from 'react'
import '../css/OurServicesCard.css'

//images
import Drilling from '../images/services/Drilling.jpg'
import Environmental from '../images/services/Environmnetal.jpeg'
import Geotech from '../images/services/Geotech.jpg'
import Slope from '../images/services/slope3.jpeg'
import Hydrogelogy from '../images/services/Hydrogelogy.JPG'
import Shoring from '../images/services/Shoring.JPG'
import { NavLink } from 'react-router-dom'


const OurServicesCard = () => {
  return (
    <>
      <div className='outer-ourservice-card'>
        <h2 className='heading-projects'>Services</h2>
        <div className="service-cards">
          <a href='/services'>
            <div className="service-card">
              <img src={Drilling} alt="service1" />
              <h3>Drilling</h3>
              <p>Our in-house drilling crews are fully licensed and insured to install monitoring water
                wells and advance boreholes.</p>
              <a href="/services">Read More &gt;&gt;</a>
            </div>
          </a>
          <a href='/services'>
            <div className="service-card">
              <img src={Geotech} alt="service1" />
              <h3>Geotechnical</h3>
              <p>Our engineers and drilling crews work together to collect soil and
                rock samples and conduct in-situ testing.</p>
              <a href="/services/#Geotechnical">Read More &gt;&gt;</a>
            </div>
          </a>
          <a href='/services'>
            <div className="service-card">
              <img src={Hydrogelogy} alt="service1" />
              <h3>Hydrogeology</h3>
              <p>We install monitoring wells and provide recommendations for dewatering and groundwater control measures.</p>
              <a href="#">Read More &gt;&gt;</a>
            </div>
          </a>
          <a href='/services'>
            <div className="service-card">
              <img src={Environmental} alt="service1" />
              <h3>Environmental</h3>
              <p>We provide Phase One & Two Environmental Site Assessments to detect contamination,
                and RSC investigation.</p>
              <a href="#">Read More &gt;&gt;</a>
            </div>
          </a>
          <a href='/services'>
            <div className="service-card">
              <img src={Slope} alt="service1" />
              <h3>Slope Stability</h3>
              <p>Our engineers use advanced techniques to analyze slope stability for properties adjacent to slopes.</p>
              <a href="#">Read More &gt;&gt;</a>
            </div>
          </a>
          <a href='/services'>
            <div className="service-card">
              <img src={Shoring} alt="service1" />
              <h3>Shoring Design</h3>
              <p>Our engineers specialize in designing shoring systems, retaining structures, and deep foundations.</p>
              <a href="/services/#Shoring">Read More &gt;&gt;</a>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default OurServicesCard