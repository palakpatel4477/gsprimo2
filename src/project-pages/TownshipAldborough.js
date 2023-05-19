import React from 'react'
import Footer from '../Components/Footer';

import Project4 from '../images/projecthome/p4.jpeg'
import P45 from '../images/P45.JPG'
import P42 from '../images/p42.JPG'
import P41 from '../images/p41.JPG'


import '../css/project-pages-css/TownshipAldborough.css'

function TownshipAldborough() {
  return (
      <>
          <div className="image-container-project">
              <div className="overlay-project"></div>
              <img src={Project4} alt="image-description" />
              <div className="text-container-project">
                <h1>Aldborough, West Elgin, ON</h1>
              </div>
          </div>
          <div className="centered-section-township">
              <div className="text-section-township">
                  <span>
                      GSPrimo Design Inc. (GSPrimo) was commissioned to conduct slope stability and
                      erosion assessments of the Wilton drain located at Part of Concession 9,
                      Township of Aldborough, West Elgin, Ontario. The objective of the study was to
                      provide recommended bank slope for channel reconstruction in the future.
                      <br /><br />
                      The scope of the assessment included several phases, starting with a records
                      review of available drawings and reports, including topographical survey maps, geotechnical
                      reports, and hydrogeological reports. The next phase was a site visit to inspect the physical
                      features of the channel, such as height, inclination, groundwater, vegetation, and others that
                      are essential for slope stability and bank erosion assessment.
                  </span>
              </div>
              <div className="image-section-township">
                  <img className='project-image-township' src={Project4} alt="Section Image" />
              </div>
          </div>
          <div className="centered-section-township">
              <div className="image-section-township">
                  <img className='project-image-township' src={P41} alt="Section Image" />
              </div>
              <div className="text-section-township" id='para-two-township'>
                  <span>
                      Slope stability analyses and soil erosion assessments were then conducted, based on
                      guidelines, codes, and standards, such as MNR Guidelines and the Canadian Foundation Engineering Manual.
                      The channel bed and bank erosion analyses were conducted to evaluate the long-term stability of the channel
                      against erosion.
                      <br /><br />
                      The estimated factor of safety for the hypothetical critical slope profile was calculated in accordance
                      with the MNR Policy Guidelines for residential settings to determine the top of stable slope. Finally,
                      a report was prepared, providing recommended bank slope for channel reconstruction in the future for the
                      proposed development.
                  </span>
              </div>
          </div>
          <div className='centered-section-township image-row'>
                <div className="image-section-township">
                    <img className='project-image-township' src={P42} alt="Section Image" />
                </div>
                <div className="image-section-township">
                    <img className='project-image-township' src={P45} alt="Section Image" />
                </div>
            </div>
          <Footer />
      </>
  )
}

export default TownshipAldborough