import React from 'react'

import Project11 from '../images/projecthome/p11.jpg'
import P1 from '../images/p11_1.jpeg'
import P2 from '../images/p11_2.JPG'
import P3 from '../images/p11_3.JPG'
import '../css/project-pages-css/SiouxLookout.css'
import Footer from '../Components/Footer'

const SiouxLookout = () => {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project11} alt="image-description" />
                <div className="text-container-project">
                    <h1>Fifth Ave., Sioux Lookout, ON</h1>
                </div>
            </div>
            <div className="centered-section-siouxlookout">
                <div className="text-section-siouxlookout">
                    <span>
                        GSPrimo Design Inc. (“GSPrimo”) was retained to perform a geotechnical investigation, Civil Engineering Design, and Structural Design for a proposed commercial development located at Fifth Ave, Sioux Lookout, Ontario. The first phase of the proposed site development included a 1-story retail store building and a 1-story Dairy Queen building within the site consisting of a total number of 28 parking spaces. 
                        <br/><br/>The geotechnical investigation involved advancing boreholes and conducting laboratory testing to determine the subsurface conditions at the site. Based on the information obtained, geotechnical recommendations were provided for the design of the foundation, site grading operations, site servicing, and pavement design. 
                    </span>
                </div>
                <div className="image-section-siouxlookout">
                    <img className='project-image-siouxlookout' src={Project11} alt="Section Image" />
                </div>
            </div>

            <div className="centered-section-siouxlookout">
                <div className="image-section-siouxlookout">
                    <img className='project-image-siouxlookout' src={P1} alt="Section Image" />
                </div>
                <div className="text-section-siouxlookout" id='para-two-siouxlookout'>
                    <span>
                        In addition, Detailed Civil Engineering and Structural Designs were carried out for the proposed development. An underground detention tank with an orifice was proposed to ensure that the peak discharge rates to the storm sewer on Fifth Ave. would be below the allowable maximum rates for all storms up to and including the 100-year storm event. 
                        <br/><br/>The proposed roof framing system for the retail store cantilever (Gerber) girders and open web steel joists. A comprehensive report and sets of drawings were prepared to document the construction recommendations for the proposed structures, as well as the underground sewage systems. 
                    </span>
                </div>
            </div>

            <div className='centered-section-siouxlookout image-row'>
                <div className="image-section-siouxlookout">
                    <img className='project-image-siouxlookout' src={P3} alt="Section Image" />
                </div>
                <div className="image-section-siouxlookout">
                    <img className='project-image-siouxlookout' src={P2} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SiouxLookout