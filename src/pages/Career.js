import React from 'react'

import '../css/Career2.css'
import Footer from '../Components/Footer'
import CareerCard from '../Components/CareerCard'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const setPageTitle = (pageTitle) => {
  document.title = `${pageTitle} | GSPrimo`;
};

const Career = () => {

    const location = useLocation();

  useEffect(() => {
    // Extract the page name from the current location
    const currentPage = location.pathname.split('/').pop();

    // Update the document title with the page name
    setPageTitle(currentPage);
  }, [location]);

    return (
        <>
            {/* <div className="image-container-career2">
                <div className="overlay-career2"></div>
                <img src={Image} alt="image-description-career2" />
                <div className="text-container-career2">
                    <h1>Career</h1>
                </div>
            </div> */}
            <section className="hero-career">
                <div className="overlay-services"></div>
                <div className="text-container-project">
                    <h1>Career</h1>
                </div>
            </section>
            <CareerCard/>
            <Footer/>
        </>
    )
}

export default Career