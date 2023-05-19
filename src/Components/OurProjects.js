import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import '../css/OurProjects.css';


//project images
import Project1 from '../images/projecthome/44.JPG'
import Project2 from '../images/projecthome/p2.JPG'
import Project3 from '../images/projecthome/p3.jpeg'
import Project4 from '../images/projecthome/p4.jpeg'
import Project5 from '../images/projecthome/p5.jpeg'
import Project6 from '../images/projecthome/p6.JPG'
import Project7 from '../images/projecthome/p7.jpeg'
import Project8 from '../images/projecthome/p8.jpeg'
import Project9 from '../images/projecthome/p9.JPG'
import Project10 from '../images/projecthome/p10.jpg'
import Project11 from '../images/projecthome/p11.jpg'
import Project12 from '../images/projecthome/p12.png'

const OurProjects = () => {
 const projects = [
    {
      //p8
      index: 1,
      imageUrl: Project1,
      services:["Geotechnical"],
      title: 'Springbank Dr., London, ON',
      link: 'DarcyDrive',
    },
    {
      //p2
      index: 2,
      imageUrl: Project2,
      services:["Geotechnical","Hydrogeology","Phase I ESA"],
      title: 'Imperial Rd., Malahide, ON',
      link: 'ImperialRoad',
    },
    {
      //p6
      index: 3,
      imageUrl: Project3,
      services:["Environmental","Geostructural"],
      title: 'Highbury Ave. N, London, ON',
      link: 'Highbury',
    },
    {
      //p3
      index: 4,
      imageUrl: Project4,
      services:["Slope Stability","Erosion Control"],
      title: 'Aldborough, West Elgin, ON',
      link: 'TownshipAldborough',
    },
    {
      //NA
      index: 5,
      imageUrl: Project5,
      services:["Geotechnical","Shoring Design"],
      title: 'Islington Ave., Toronto, ON',
      link: 'Islington',
    },
    {
      //p4
      index: 6,
      imageUrl: Project6,
      services:["Geotechnical","Shoring Design"],
      title: 'Victoria Sq. Blvd., Markham, ON',
      link: 'VictoriaSquare',
    },
    {
      //p5
      index: 7,
      imageUrl: Project7,
      services:["Geotechnical","Topo Survey","Erosion Control"],
      title: 'Blandford-Blenheim, ON',
      link: 'BlandfordBlenheim',
    },
    {
      //p1
      index: 8,
      imageUrl: Project8,
      services:["Phase I & II ESA","Reliance Letter"],
      title: 'Oxford St. West, London, ON',
      link: 'OxfordStreet',
    },
    {
      //p12
      index: 9,
      imageUrl: Project9,
      services:["Geotechnical","Civil","Structural"],
      title: 'Waterloo St., Kitchener, ON',
      link: 'WaterlooStreet',
    },
    {
      //p11
      index: 10,
      imageUrl: Project10,
      services:["Geotechnical","Hydrogeology","Civil"],
      title: 'Clive Rd., Kitchener, ON',
      link: 'CliveRoad',
    },
    {
      //p13
      index: 11,
      imageUrl: Project11,
      services:["Geotechnical","Civil","Structural"],
      title: 'Fifth Ave., Sioux Lookout, ON',
      link: 'SiouxLookout',
    },
    {
      //NA
      index: 12,
      imageUrl: Project12,
      services:["Geotechnical","Civil"],
      title: 'Glen Forrest Blvd., Waterloo, ON',
      link: 'GlenForrest',
    },
  ];
  return (
    <>
      <div className='main-outer-project-card-section'>
        <div className="outer-project-card">
          <div className="project-cards">
          {projects.map((project) => (
            
            <ProjectCard
              key={project.index}
              image={project.imageUrl}
              services={project.services}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
          </div>
        </div>
      </div>
    </>
    
  );
};

export default OurProjects;
