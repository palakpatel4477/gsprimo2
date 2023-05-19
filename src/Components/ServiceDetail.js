import React from 'react';
import '../css/ServiceDetail.css'

//images
import Drilling from '../images/services/Drilling.jpg'
import Environmental from '../images/services/Environmnetal.jpeg'
import Geotech from '../images/services/Geotech.jpg'
import Slope from '../images/services/slope3.jpeg'
import Hydrogelogy from '../images/services/Hydrogelogy.JPG'
import Shoring from '../images/services/Shoring.JPG'

const SeviceDetail = () => {
  return (
    <>
      {/* Drilling */}
      <div className='main-section-drilling'>
        <div id='Drilling-Section' className='description-section-drilling'>
          <h2>Drilling</h2>
          {/* <hr/> */}
          <p>At GSPrimo, we take pride in offering top-notch drilling services that are unparalleled in the industry.
            Our in-house drilling crews are fully licensed and insured and have years of experience in installing monitoring
            water wells and advancing geotechnical boreholes. We own and operate a variety of sizes and styles of drill rigs,
            which allows us to provide customized drilling solutions that are tailored to meet the unique needs of each project.
             
            <br/>
            <br/>
            Whether you need to install monitoring wells for environmental monitoring or require
            geotechnical drilling for site characterization, our team of experts has the knowledge and experience to get the job
            done right, the first time.
          </p>
        </div>
        <div className='image-section-drilling'>
          <img src={Drilling} alt="placeholder" />
        </div>
      </div>

      {/* Geotechnical */}
      <div className='main-section-geotechnical'>
        <div id='Geotechnical' className='image-section-geotechnical'>
          <img src={Geotech} alt="placeholder" />
        </div>
        <div className='description-section-geotechnical'>
          <h2>Geotechnical</h2>
          {/* <hr/> */}
          <p>At GSPrimo, our geotechnical investigations involve a collaborative effort between 
            our experienced engineers and skilled drilling crews to provide our clients with accurate 
            and cost-effective geotechnical solutions for their projects. Our drilling crews collect soil 
            and rock samples and conduct in-situ testing.
            <br/>
            <br/>
            Our engineers then use this 
            information to analyze foundation design options, perform ground improvement analysis, and design 
            retaining structures to ensure the stability and safety of your project. With our expertise in 
            geotechnical investigations, we can help you make informed decisions to optimize your project's 
            performance and minimize construction costs.
          </p>
        </div>
      </div>

      {/* Hydrogeological */}
      <div className='main-section-hydrogeological'>
        <div className='description-section-hydrogeological'>
          <h2>Hydrogeology</h2>
          {/* <hr /> */}
          <p>Our engineers and drilling crews install monitoring wells and analyze 
            groundwater table from observation well measurements, and surface water and 
            groundwater interactions, providing detailed groundwater characterization. 
            We also provide recommendations for dewatering and groundwater control measures. 
            Our hydrogeological assessments are tailored to each client's needs and requirements, 
            ensuring the best possible solutions are provided to manage their groundwater resources. 
            <br/><br/>
            Our team of experts uses the latest technology and equipment to ensure the accuracy and 
            reliability of our assessments, providing clients with the data and insights they need to 
            make informed decisions about their projects.
          </p>
        </div>
        <div className='image-section-hydrogeological'>
          <img src={Hydrogelogy} alt="placeholder" />
        </div>
      </div>

      {/* Environmental */}
      <div className='main-section-environmental'>
        <div className='image-section-environmental'>
          <img src={Environmental} alt="placeholder" />
        </div>
        <div className='description-section-environmental'>
          <h2>Environmental</h2>
          {/* <hr/> */}
          <p>We provide both Phase One and Phase Two Environmental Site Assessments (ESAs) to determine 
            if a property is subject to actual or potential contamination. Our Phase One ESA includes a site 
            inspection, review of historical records, interviews with stakeholders, and research on nearby 
            sources of contamination. The results of the Phase One ESA may indicate the need for a Phase Two ESA, 
            which involves the collection and analysis of soil, groundwater, and/or soil vapour samples to confirm 
            the presence or absence of contamination. 
            <br/><br/>
            In addition to ESAs, our team can perform a thorough investigation 
            of a property's environmental condition to provide a Record of Site Condition (RSC).
          </p>
        </div>
      </div>

      {/* Slope Stability */}
      <div className='main-section-slop'>
        <div className='description-section-slop'>
          <h2>Slope Stability</h2>
          {/* <hr /> */}
          <p>At GSPrimo, we offer expert Slope Stability Assessments that help mitigate the risk of 
            landslides and slope failures for properties adjacent to slopes and watercourses. Our team 
            of experienced engineers uses advanced techniques to analyze slope stability and determine the 
            most appropriate stabilization methods for each unique situation. We consider various factors such 
            as soil type, water content, vegetation cover, and slope angle to assess the potential risk and provide 
            effective solutions. <br/><br/>
            Our recommendations are based on a thorough understanding of the site-specific 
            conditions and are designed to meet the specific needs of each project, ensuring maximum safety and 
            cost-effectiveness. 
          </p>
        </div>
        <div className='image-section-slop'>
          <img src={Slope} alt="placeholder" />
        </div>
      </div>

      {/* Shoring Design */}
      <div className='main-section-shoring'>
        <div id='Shoring' className='image-section-shoring'>
          <img src={Shoring} alt="placeholder" />
        </div>
        <div className='description-section-shoring'>
          <h2>Shoring Design</h2>
          {/* <hr/> */}
          <p>
            Our in-house professional engineers specialize in the design of temporary and permanent shoring systems, retaining structures, pile foundation systems, and machinery foundations. We use the latest technology and engineering techniques to ensure that your project is completed on time, on budget, and to your satisfaction. 
            <br/><br/>
            Our experienced team works closely with you to understand your specific requirements and to offer innovative and cost-effective solutions for your project needs.
          </p>
        </div>
      </div>

    </>
  );
};

export default SeviceDetail;
