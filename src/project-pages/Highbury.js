import React from 'react'

import Project3 from '../images/projecthome/p3.jpeg'
import P32 from '../images/p32.JPG'
import P33 from '../images/p33.jpeg'

import '../css/project-pages-css/Highbury.css'
import Footer from '../Components/Footer'

function Highbury() {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project3} alt="image-description" />
                <div className="text-container-project">
                    <h1>Highbury Ave. N, London, ON</h1>
                </div>
            </div>
            <div className="centered-section-highbury">
                <div className="text-section-highbury">
                    <span>
                        GSPrimo Design Inc. (GSPrimo) was retained to design a secondary containment wall for a project site located at Highbury Ave N, London, Ontario. The objective of this study was to provide information, recommendations, and comments for the design and construction of the secondary containment wall, which was required to collect and contain any leak, spill or overfill from the outdoor ethanol storage tanks into the adjacent sewer system. The project involved placing a reinforced concrete wall with a metal fence as a secondary containment system. A report and sets of drawings were prepared for a comprehensive design and construction recommendation for the secondary containment system.
                    </span>
                </div>
                <div className="image-section-highbury">
                    <img className='project-image-highbury' src={Project3} alt="Section Image" />
                </div>
            </div>
            <div className='centered-section-highbury image-row'>
                <div className="image-section-highbury">
                    <img className='project-image-highbury' src={P32} alt="Section Image" />
                </div>
                <div className="image-section-highbury">
                    <img className='project-image-highbury' src={P33} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Highbury