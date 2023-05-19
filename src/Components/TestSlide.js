import React, { useState,useEffect } from 'react';
import '../css/TestSlide.css';

//slide images
import Slide2 from '../images/Slides/S2.jpg'
import Slide3 from '../images/Slides/S3.jpg'
import Slide6 from '../images/Slides/S6.JPG'
import Slide7 from '../images/Slides/S7.jpg'
import Project12 from '../images/projecthome/p12.png'


const TestSlide = () => {
  const items = [
        {
          index: 2,
          imageUrl: Slide2,
          title: 'Fifth Ave., Sioux Lookout, Ontario',
          link: 'https://example.com/project-2',
        },
        {
          index: 3,
          imageUrl: Slide3,
          title: 'Clive Rd., Kitchener, Ontario',
          link: 'https://example.com/project-3',
        },
        {
          index: 4,
          imageUrl: Project12,
          title: 'Glen Forrest Blvd., Waterloo, ON',
          link: 'https://example.com/project-2',
        },
        {
          index: 5,
          imageUrl: Slide7,
          title: 'Oxford St. E., London, Ontario',
          link: 'https://example.com/project-2',
        },
      ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [translateValue, setTranslateValue] = useState(0);

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      return;
    }

    // const prevIndex = currentIndex - 2;
    // const nextTranslateValue = translateValue + 100;

    const prevIndex = currentIndex-1;
    const nextTranslateValue = translateValue + 25;

    setCurrentIndex(prevIndex);
    setTranslateValue(nextTranslateValue);
  };

  const handleNextClick = () => {
    //original
    // if (currentIndex >= items.length - 2) {


    if (currentIndex >= items.length - 1) {
      const nextIndex = 0;
      const nextTranslateValue = 0;

      setCurrentIndex(nextIndex);
      setTranslateValue(nextTranslateValue);
    } else {
      //original
      // const nextIndex = currentIndex + 2;
      // const nextTranslateValue = translateValue - 100;

      const nextIndex = currentIndex + 1;
      const nextTranslateValue = translateValue - 25;

      setCurrentIndex(nextIndex);
      setTranslateValue(nextTranslateValue);
    }
  };

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <>
    <div className='main-slide'>
        <div className='slide-static-card-section'>
          <div className='static-card'>
            <a href='projects'>
              <div className="slide-static-card">
                <h2>Projects</h2>
              </div>
            </a>
          </div>
          <div className="slideshow">
            <h3>Projects</h3>
            <div className="slideshow-wrapper" style={{ transform: `translateX(${translateValue}%)` }}>
              {items.map((item, index) => (
                <div key={index} className="slideshow-item">
                  <a href='projects'><img src={item.imageUrl} alt={item.title} /></a>
                  <h2>{item.title}</h2>
                </div>
              ))}
            </div>
            <button className="slideshow-prev" onClick={handlePrevClick}>
              &lt;
            </button>
            <button className="slideshow-next" onClick={handleNextClick}>
              &gt;
            </button>
          </div>
        </div>
    </div>
    </>
  );
};

export default TestSlide;
