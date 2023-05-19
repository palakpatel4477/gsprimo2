import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import Image1 from '../images/home11.jpeg'
import Image2 from '../images/home_back2.jpeg'
import Image3 from '../images/home_back3.jpg'

const IndexSection = () => {

    const [images] = useState([Image1, Image2, Image3]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(changeBackgroundImage, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        setIsTransitioning(true);
    
        const transitionTimeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 500);
    
        return () => {
          clearTimeout(transitionTimeout);
        };
      }, [currentImageIndex]);

    const changeBackgroundImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const backgroundImage = `url(${images[currentImageIndex]})`;


    // className="hero"
    return (
        <section id='hero' className={`hero background-slider ${isTransitioning ? 'transitioning' : ''}`} style={{backgroundImage:backgroundImage}}>
            <div className="hero-content">
                <NavLink to='services'><button className="hero-button">Services</button></NavLink>
            </div>
        </section>
    )
}

export default IndexSection