import React from 'react';
import '../css/project-pages-css/DarcyDrive.css';

//images
import Project1 from '../images/projecthome/44.JPG'
import Image2 from '../images/33.JPG'
import Image3 from '../images/66.JPG'
import Footer from '../Components/Footer';

const DarcyDrive = () => {
  return (
    <>
      <div className="image-container-project">
        <div className="overlay-project"></div>
        <img src={Project1} alt="image-description" />
        <div className="text-container-project">
          <h1>Springbank Dr., London, ON</h1>
        </div>
      </div>
      <div className="centered-section-darcy">
        <div className="text-section-darcy">
          <span>
            GSPrimo Design Inc. (GSPrimo) was commissioned to conduct a geotechnical investigation for a proposed mixed-use commercial/residential building located at Springbank Dr. in London, Ontario. The objective of the study was to identify the subsurface conditions at the proposed site by drilling five boreholes and installing three monitoring wells as well as conducting laboratory testing. The proposed development entails a 15-story mixed-use commercial/residential building with three underground parking levels, providing a total of 106 parking spaces, with 90 parking spaces in the three underground parking levels. Soil samples were collected from the boreholes and in-Situ SPT Tests were conducted to a maximum depth of 18 m (60 feet) below the existing site grade. Based on the findings, geotechnical recommendations were provided for foundation design, site grading operations, site servicing, and pavement design.
          </span>
        </div>
        <div className="image-section-darcy">
          <img className='project-image-darcy' src={Project1} alt="Section Image" />
        </div>
      </div>
      <div className='centered-section-darcy image-row'>
        <div className="image-section-darcy">
          <img className='project-image-darcy' src={Image2} alt="Section Image" />
        </div>
        <div className="image-section-darcy">
          <img className='project-image-darcy' src={Image3} alt="Section Image" />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DarcyDrive;

