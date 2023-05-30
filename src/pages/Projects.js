import React from 'react'
import Image from '../images/projects.jpeg'
import Project1 from '../images/projecthome/44.JPG'
import '../css/Projects.css'
import Footer from '../Components/Footer'
import OurProjects from '../Components/OurProjects'
import ProjectHeader from '../Components/ProjectHeader'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const setPageTitle = (pageTitle) => {
  document.title = `${pageTitle} | GSPrimo`;
};

const Projects = () => {

  const location = useLocation();

  useEffect(() => {
    // Extract the page name from the current location
    const currentPage = location.pathname.split('/').pop();

    // Update the document title with the page name
    setPageTitle(currentPage);
  }, [location]);

  return (
    <>
      {/* <div className="image-container-project">
        <div className="overlay-project"></div>
        <img src={Project1} alt="image-description" />
        <div className="text-container-project">
          <h1>Projects</h1>
        </div>
      </div> */}
      <section className="hero-projects">
        <div className="overlay-services"></div>
        <div className="text-container-project">
          <h1>Projects</h1>
        </div>
      </section>
      <ProjectHeader/>
      <OurProjects/>
      <Footer/>
    </>
  )
}

export default Projects