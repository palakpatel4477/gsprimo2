import React from 'react';
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

const Header = () => {
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
