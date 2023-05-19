import React from 'react'

import Project10 from '../images/projecthome/p10.jpg'
import P1 from '../images/p10_1.jpeg'
import P3 from '../images/p10_3.jpg'
import P4 from '../images/p10_4.jpg'
import P5 from '../images/p10_5.jpg'
import P6 from '../images/p10_6.jpg'



import '../css/project-pages-css/CliveRoad.css'
import Footer from '../Components/Footer'

function CliveRoad() {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project10} alt="image-description" />
                <div className="text-container-project">
                    <h1>Clive Rd., Kitchener, ON</h1>
                </div>
            </div>
            <div className="centered-section-cliveroad">
                <div className="text-section-cliveroad">
                    <span>
                        GSPrimo Design Inc. (“GSPrimo”) was retained to perform a geotechnical investigation, a hydrogeological study and a Civil Engineering Design for a proposed residential development located at Clive Road, Kitchener, Ontario. The proposed site development included three three-story building blocks and one four-story building block, consisting of a total of 22 units, along with 26 outdoor parking spaces. 
                        <br/><br/>The geotechnical investigation involved advancing boreholes and conducting laboratory testing to determine the subsurface conditions at the site, while the hydrogeological study assessed groundwater conditions to meet the design and permitting requirements for the development. 
                    </span>
                </div>
                <div className="image-section-cliveroad">
                    <img className='project-image-cliveroad' src={Project10} alt="Section Image" />
                </div>
            </div>

            <div className="centered-section-cliveroad">
                <div className="image-section-cliveroad">
                    <img className='project-image-cliveroad' src={P1} alt="Section Image" />
                </div>
                <div className="text-section-cliveroad" id='para-two-cliveroad'>
                    <span>
                        Based on the information obtained from these studies and design works, geotechnical and hydrogeological recommendations were provided to facilitate the proposed development. 
                        In addition, a comprehensive Civil Engineering Design was carried out, including the Functional Servicing, Stormwater Management Plan, Grading Plan, and Erosion Control Plan. A report and sets of drawings were also prepared to document the Civil Engineering Design for the proposed development. 
                    </span>
                </div>
            </div>
            <div className='centered-section-cliveroad image-row'>
                <div className="image-section-cliveroad">
                    <img className='project-image-cliveroad' src={P5} alt="Section Image" />
                </div>
                <div className="image-section-cliveroad">
                    <img className='project-image-cliveroad' src={P6} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CliveRoad