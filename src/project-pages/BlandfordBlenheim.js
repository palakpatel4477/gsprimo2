import React from 'react'
import Project7 from '../images/projecthome/p7.jpeg'
import P71 from '../images/p71.png'
import P72 from '../images/p72.png'
import '../css/project-pages-css/BlandfordBlenheim.css'
import Footer from '../Components/Footer'

const BlandfordBlenheim = () => {
    return (
        <>
            <div className="image-container-project">
                <div className="overlay-project"></div>
                <img src={Project7} alt="image-description" />
                <div className="text-container-project">
                    <h1>Blandford-Blenheim, ON</h1>
                </div>
            </div>
            <div className="centered-section-blandfordblenheim">
                <div className="text-section-blandfordblenheim">
                    <span>
                        GSPrimo Design Inc. (GSPrimo) was retained to propose an erosion control plan for a riverbank within a property located at Township Road 6, Blandford-Blenheim, Ontario. The scope of the study included field assessments, geotechnical investigation, and a topographical survey to evaluate the watercourse conditions and identify the erosion-prone area along the riverbank within the property. 
                        <br/><br/>The resulting comprehensive erosion control plan includes specific design drawings and construction details for erosion control systems to mitigate the effects of riverbank erosion and prevent further property damage caused by soil erosion.                        
                    </span>
                </div>
                <div className="image-section-blandfordblenheim">
                    <img className='project-image-blandfordblenheim' src={Project7} alt="Section Image" />
                </div>
            </div>
            <div className='centered-section-blandfordblenheim image-row'>
                <div className="image-section-blandfordblenheim">
                    <img className='project-image-blandfordblenheim' src={P72} alt="Section Image" />
                </div>
                <div className="image-section-blandfordblenheim">
                    <img className='project-image-blandfordblenheim' src={P71} alt="Section Image" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BlandfordBlenheim