import React from 'react'

import '../css/project-pages-css/OxfordStreet.css'
import Footer from '../Components/Footer'
import Project8 from '../images/projecthome/p8.jpeg'
import P81 from '../images/p81.JPG'
import P82 from '../images/p82.JPG'

function OxfordStreet() {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project8} alt="image-description" />
                <div className="text-container-project">
                    <h1>Oxford St. West, London, ON</h1>
                </div>
            </div>
            <div className="centered-section-oxfordstreet">
                <div className="text-section-oxfordstreet">
                    <span>
                        GSPrimo was retained to provide comprehensive environmental site assessment services for a property located at Oxford Street West, London, Ontario. Our team conducted both Phase One and Two Environmental Site Assessments (Phase I & II ESA) in strict compliance with Canadian Standards CSA Z-768-01 (R2016) and CSA Z-769-00 (R2018) and analyzed the results against the standards outlined in Part XV.1 of the Environmental Protection Act. Our ESA reports help our clients make informed decisions and mitigate environmental risks. We also provide a reliance letter to the client at the end of the assessment to assure compliance and due diligence.
                    </span>
                </div>
                <div className="image-section-oxfordstreet">
                    <img className='project-image-oxfordstreet' src={Project8} alt="Section Image" />
                </div>
            </div>
            <div className='centered-section-oxfordstreet image-row'>
                <div className="image-section-oxfordstreet">
                    <img className='project-image-oxfordstreet' src={P81} alt="Section Image" />
                </div>
                <div className="image-section-oxfordstreet">
                    <img className='project-image-oxfordstreet' src={P82} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default OxfordStreet