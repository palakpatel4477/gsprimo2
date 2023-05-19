import React from 'react'
import '../css/SloganCard.css'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SloganCard = () => {
  return (
      <>
          <div className='slogan-text'>
              <h2>Building with Precision, Partnering with Passion</h2>
          </div>
          <div className='slogancard-main-section'>
            <div className='slogan-left-section'>
                <p>
                GSPrimo Design Inc. (GSPrimo) is an engineering service firm licensed by the Professional Engineers of Ontario (PEO) to provide a diverse range of design services in the fields of geotechnical, environmental, and geostructural (shoring and pile) to both the industry and the general public. 
                </p>
                <p>
                  We are also licensed well contractors, and our in-house drilling crews are fully licensed and insured in installing monitoring water wells and advancing boreholes for your projects.
                </p>
                <p>
                  Our goal is to deliver high-quality services to all our clients within an industry-leading timeframe, setting new standards for excellence.
                </p>
                <a href='/aboutus'><button className='btn-about-slogan'>About us</button></a>
            </div>
            <div className='slogan-right-section'>
              <h2><FontAwesomeIcon icon={faCheck} className='check'/><span className='check-text'>Time is of the essence</span></h2>
              <p>Avoid approval, design, or construction delay</p>
              <h2><FontAwesomeIcon icon={faCheck} className='check'/><span className='check-text'>A penny saved is a penny earned</span></h2>
              <p>We provide high-quality and cost-effective solutions</p>
              <h2><FontAwesomeIcon icon={faCheck} className='check'/><span className='check-text'>Begin with the end in mind</span></h2>
              <p>We help simplify the process from start to finish</p>
            </div>
          </div>
      </>
  )
}

export default SloganCard