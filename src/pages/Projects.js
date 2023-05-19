import React from 'react'
import Image from '../images/projects.jpeg'
import Project1 from '../images/projecthome/44.JPG'
import '../css/Projects.css'
import Footer from '../Components/Footer'
import OurProjects from '../Components/OurProjects'
import ProjectHeader from '../Components/ProjectHeader'

const Projects = () => {
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