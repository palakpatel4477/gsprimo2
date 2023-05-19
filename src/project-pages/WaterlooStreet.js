import React from 'react'

import Project9 from '../images/projecthome/p9.JPG'
import P91 from '../images/p91.JPG'
import P92 from '../images/p92.jpg'
import '../css/project-pages-css/WaterlooStreet.css'
import Footer from '../Components/Footer'

function WaterlooStreet() {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project9} alt="image-description" />
                <div className="text-container-project">
                    <h1>Waterloo St., Kitchener, ON</h1>
                </div>
            </div>
            <div className="centered-section-waterloostreet">
                <div className="text-section-waterloostreet">
                    <span>
                    GSPrimo Design Inc. (“GSPrimo”) was retained to perform a geotechnical investigation, Civil Engineering Design, and Structural Design for a proposed residential development located at Waterloo Street, Kitchener, Ontario. The proposed site development included two four-story buildings. The geotechnical investigation involved advancing boreholes and conducting laboratory testing to determine the subsurface conditions at the site. 
                    <br/><br/>Based on the information obtained, geotechnical recommendations were provided for the design of the foundation, site grading operations, site servicing, and pavement design. In addition, comprehensive Civil Engineering and Structural Designs were carried out for the proposed development. The proposed structural system was a moment-resisting steel frame with a lumber joist flooring system.                        
                    </span>
                </div>
                <div className="image-section-waterloostreet">
                    <img className='project-image-waterloostreet' src={Project9} alt="Section Image" />
                </div>
            </div>
            <div className='centered-section-waterloostreet image-row'>
                <div className="image-section-waterloostreet">
                    <img className='project-image-waterloostreet' src={P91} alt="Section Image" />
                </div>
                <div className="image-section-waterloostreet">
                    <img className='project-image-waterloostreet' src={P92} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WaterlooStreet