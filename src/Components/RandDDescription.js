import React from 'react';
import '../css/RandDDescription.css'

import R1 from '../images/Randd1.png'
import R2 from '../images/Randd2.JPG'


const CareerDescription = () => {
  return (
    <>
      <div className="centered-section-randd">
        <div className="text-section-randd">
          <h3>AutoFoundation</h3>
          <span>
            The Revit Plugin developed at GSPrimo allows for comprehensive analysis and design of both shallow and deep foundations using raw soil information obtained from geotechnical investigations. The Plugin incorporates advanced soil-structure interaction techniques to ensure accurate and efficient foundation design. By leveraging the power of Revit, the Plugin streamlines the design process, reducing errors and saving valuable time. Additionally, the Plugin provides users with real-time feedback, allowing for quick adjustments and fine-tuning of foundation design. Overall, the Revit Plugin is an indispensable tool for architects, engineers, and construction professionals looking to optimize foundation design and ensure the stability and safety of their structures.
          </span>
        </div>
        <div className="image-section-randd">
          <img className='project-image-randd' src={R1} alt="Section Image" />
        </div>
      </div>

   
      <div id='GoeComputer'>
      <div className="centered-section-randd">
        <div className="image-section-randd">
          <img className='project-image-randd' src={R2} alt="Section Image" />
        </div>
        <div className="text-section-randd">
        <h3>GeoComputer</h3>
          <span>
            GeoComputer is a comprehensive and user-friendly web-based tool developed by GSPrimo for a range of geotechnical-related analyses. The platform is designed to provide engineers and geotechnical professionals with a flexible and reliable service that allows them to perform various types of analyses and design tasks using the data gathered during field investigations. With GeoComputer, users can easily perform slope stability analysis, pile design, footing design, shoring design, and stratigraphy generation, among others. The tool's intuitive interface and advanced functionalities make it a powerful tool for geotechnical engineers, allowing them to save time and effort in their day-to-day work. Whether you are working on a small-scale project or a large-scale development, GeoComputer is the ideal tool for all your geotechnical needs.
          </span>
        </div>
      </div>
      </div>
    </>
  );
};

export default CareerDescription;
