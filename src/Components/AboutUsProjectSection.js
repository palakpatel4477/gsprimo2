import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/AboutUsProjectSection.css'

const AboutUsProjectSection = () => {
    return (
        <section className="my-section-project-section">
            <div className="left-column-project-section">
                <h2 className='centered-text-project-section'>About <span className='spanText-project-section'>us</span></h2>
            </div>
            <div className="right-column-project-section">
                <p>
                    GSPrimo Design Inc. (GSPrimo) is an engineering service firm licensed by the Professional Engineers of Ontario (PEO) to provide a diverse range of design services in the fields of geotechnical, environmental, and geostructural (shoring and pile) to both the industry and the general public.
                    <br/><br/>We are also licensed well contractors, and our in-house drilling crews are fully licensed and insured in installing monitoring water wells and advancing boreholes for your projects.
                </p>
                <br/>
                <a href='projects'><button className="about-button-project-section">Our Projects</button></a>
            </div>
        </section>
    );
}

export default AboutUsProjectSection