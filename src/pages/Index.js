import React,{useEffect} from 'react';
import '../css/Index.css'

//css
import '../css/IndexSection.css'

//components
import IndexSection from '../Components/IndexSection';
import OurServicesCard from '../Components/OurServicesCard';
import Footer from '../Components/Footer';

import TestSlide from '../Components/TestSlide'
import CareerDescription from '../Components/CareerDescription';
import SloganCard from '../Components/SloganCard';

import { useLocation } from 'react-router-dom'

const setPageTitle = (pageTitle) => {
  document.title = `Home | GSPrimo`;
};

const Header = () => {

    const location = useLocation();

    useEffect(() => {
      // Extract the page name from the current location
      const currentPage = location.pathname.split('/').pop();
  
      // Update the document title with the page name
      setPageTitle(currentPage);
    }, [location]);

    return (
        <>
            <IndexSection />
            <SloganCard/>
            <OurServicesCard/>
            <CareerDescription/>
            <TestSlide/>
            <Footer/>
        </>
    );
};

export default Header;
