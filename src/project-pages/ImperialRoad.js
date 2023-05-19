import React from 'react'
import Project2 from '../images/projecthome/p2.JPG'

import P25 from '../images/P25.jpeg'
import P22 from '../images/p22.jpeg'
import P23 from '../images/p23.JPG'

import '../css/project-pages-css/ImperialRoad.css';
import Footer from '../Components/Footer';

const ImperialRoad = () => {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project2} alt="image-description" />
                <div className="text-container-project">
                    <h1>Imperial Rd., Malahide, ON</h1>
                </div>
            </div>
            <div className="centered-section-imperial">
                <div className="text-section-imperial">
                    <span>
                        GSPrimo Design Inc. (“GSPrimo”) was retained to perform a geotechnical investigation and a
                        hydrogeological study for a proposed residential development within a site located at Imperial Rd,
                        Malahide, Ontario.
                        
                        The proposed site development involved the division of the property into three separate lots, designated as Lot A, Lot B, and Lot C. The existing dwelling and garage remained on Lot C while Lot A and Lot B each featured a newly constructed raised dwelling with a half basement, as well as a separate driveway accessible from Imperial Road and a green yard area.

                        <br/><br/>
                        The geotechnical investigation involved advancing boreholes and associated
                        laboratory testing to determine the subsurface conditions at the site. Based on the information
                        obtained, geotechnical recommendations were provided for the design of foundation, site grading
                        operations, site servicing, and pavement design.
                    </span>
                </div>
                <div className="image-section-imperial">
                    <img className='project-image-imperial' src={Project2} alt="Section Image" />
                </div>
            </div>

            <div className="centered-section-imperial">
                <div className="image-section-imperial">
                    <img className='project-image-imperial' src={P25} alt="Section Image" />
                </div>
                <div className="text-section-imperial" id='para-two-imperial'>
                    <span>
                        The hydrogeological study assessed groundwater
                        conditions to meet the design and permitting requirements for the proposed development.
                        In addition to these services, GSPrimo also conducted a Phase One Environmental Site Assessment (Phase I ESA) for the site. The purpose of the report was to review previous and current uses and operations on the subject site and surrounding properties, and to identify potential issues of environmental concern. 
                        <br/><br/>This assessment was performed in general accordance with the Canadian Standards Association (CSA) document entitled Phase I Environmental Site Assessment, CSA Standard Z768-01 dated November 2012.
                    </span>
                </div>
            </div>



            <div className='centered-section-imperial image-row'>
                <div className="image-section-imperial">
                    <img className='project-image-imperial' src={P22} alt="Section Image" />
                </div>
                <div className="image-section-imperial">
                    <img className='project-image-imperial' src={P23} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ImperialRoad