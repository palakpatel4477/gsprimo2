import React from 'react';
import '../css/project-pages-css/VictoriaSquare.css';

//images
import Project1 from '../images/projecthome/p6.JPG'
import P61 from '../images/p61.png'
import P62 from '../images/p62.png'
import Footer from '../Components/Footer';

const VictoriaSquare = () => {
  return (
    <>
    <div className="image-container-project">
              <div className="overlay-project"></div>
              <img src={Project1} alt="image-description" />
              <div className="text-container-project">
                <h1>Victoria Sq. Blvd., Markham, ON</h1>
              </div>
          </div>
    <div className="centered-section-victoriasquare">
      <div className="text-section-victoriasquare">
        <span>
            GSPrimo Design Inc. (GSPrimo) was retained to design a temporary shoring system for a 
            proposed development of a property located at Victoria Square Boulevard, Markham, Ontario. 
            The aim of this project was to propose a suitable temporary shoring system to support the vertical 
            excavation with an approximate depth of 3.0 meters below ground level along the north and south property 
            lines of the subject site. The design for the temporary shoring system consisted of a cantilevered soldier 
            pile with timber lagging. 
            <br/><br/>
            To ensure the safety and stability of the temporary shoring system, several design 
            factors were considered. These included soil conditions, groundwater levels, the proposed excavation depth, 
            and the surrounding structures. The final design proposal for the temporary shoring system was presented in a 
            comprehensive report, which included detailed calculations and drawings of the proposed shoring system.
        </span>
      </div>
      <div className="image-section-victoriasquare">
        <img className='project-image-victoriasquare' src={Project1} alt="Section Image" />
      </div>
    </div>
    <div className='centered-section-victoriasquare image-row'>
                <div className="image-section-victoriasquare">
                    <img className='project-image-victoriasquare' src={P61} alt="Section Image" />
                </div>
                <div className="image-section-victoriasquare">
                    <img className='project-image-victoriasquare' src={P62} alt="Section Image" />
                </div>
            </div>
    <Footer />
  </>
  )
}

export default VictoriaSquare