import React from 'react'

import Project5 from '../images/projecthome/p5.jpeg'
import P51 from '../images/p51.jpeg'
import P52 from '../images/p52.jpeg'
import '../css/project-pages-css/Islington.css'
import Footer from '../Components/Footer'

function Islington() {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project5} alt="image-description" />
                <div className="text-container-project">
                    <h1>Islington Ave., Toronto, ON</h1>
                </div>
            </div>
            <div className="centered-section-islington">
                <div className="text-section-islington">
                    <span>
                        GSPrimo Design Inc. (GSPrimo) was retained to design a temporary shoring system for a proposed basement addition located at Islington Ave, Toronto, Ontario. The objective of the project was to provide a safe and stable excavation for the proposed basement addition by means of a temporary shoring system. The project involved designing a suitable temporary shoring system for the un-shored excavation that would be stable and secure during the construction process. 
                        <br/><br/>The work consisted of placing timber lagging between the soldier piles as temporary support for the retained soil to a maximum depth of 3.35 m (11 ft) and a maximum duration of 24 months. A comprehensive design recommendation for the temporary shoring system was prepared, which included a report and sets of drawings.
                    </span>
                </div>
                <div className="image-section-islington">
                    <img className='project-image-islington' src={Project5} alt="Section Image" />
                </div>
            </div>
            <div className='centered-section-islington image-row'>
                <div className="image-section-islington">
                    <img className='project-image-islington' src={P51} alt="Section Image" />
                </div>
                <div className="image-section-islington">
                    <img className='project-image-islington' src={P52} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Islington