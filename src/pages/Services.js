import React from 'react'
import ServicesCard from '../Components/ServicesCard'
import AboutUsContactSection from '../Components/AboutUsContactSection'
import Footer from '../Components/Footer'
import ServiceDetail from '../Components/ServiceDetail'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const setPageTitle = (pageTitle) => {
  document.title = `${pageTitle} | GSPrimo`;
};

const Services = () => {

  const location = useLocation();

  useEffect(() => {
    // Extract the page name from the current location
    const currentPage = location.pathname.split('/').pop();

    // Update the document title with the page name
    setPageTitle(currentPage);
  }, [location]);

  return (
    <>
        <ServicesCard/>
        <ServiceDetail />
        <AboutUsContactSection />
        <Footer /> 
    </>
  )
}

export default Services