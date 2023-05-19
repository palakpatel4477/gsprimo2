import React from 'react'

import Project12 from '../images/projecthome/p12.png'
import P1 from '../images/p12_1.jpeg'
import P2 from '../images/p12_2.jpeg'
import '../css/project-pages-css/GlenForrest.css'
import Footer from '../Components/Footer'

function GlenForrest() {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project12} alt="image-description" />
                <div className="text-container-project">
                    <h1>Glen Forrest Blvd., Waterloo, ON</h1>
                </div>
            </div>
            <div className="centered-section-glenforrest">
                <div className="text-section-glenforrest">
                    <span>
                        GSPrimo was retained to perform a geotechnical investigation and Civil Engineering Design for a proposed commercial development located at Glen Forrest Waterloo, Ontario. The proposed site development included a 3-story commercial/residential building with an underground parking level within the site consisting of a total number of 44 parking spaces. The geotechnical investigation involved advancing boreholes and conducting laboratory testing to determine the subsurface conditions at the site.
                        <br/><br/>In addition, a comprehensive Civil Engineering Design was carried out, including the Functional Servicing, Stormwater Management Plan, Grading Plan, and Erosion Control Plan. A report and sets of drawings were also prepared to document the Civil Engineering Design for the proposed development.                        
                    </span>
                </div>
                <div className="image-section-glenforrest">
                    <img className='project-image-glenforrest' src={Project12} alt="Section Image" />
                </div>
            </div>
            <div className='centered-section-glenforrest image-row'>
                <div className="image-section-glenforrest">
                    <img className='project-image-glenforrest' src={P1} alt="Section Image" />
                </div>
                <div className="image-section-glenforrest">
                    <img className='project-image-glenforrest' src={P2} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default GlenForrest