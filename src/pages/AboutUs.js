import React from "react";
import "../css/AboutUs.css";
import Footer from "../Components/Footer";
import AboutUsProjectSection from "../Components/AboutUsProjectSection";
import AboutUsContactSection from "../Components/AboutUsContactSection";
import Golas from "../Components/Goals";
import Team from "../Components/Team";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const setPageTitle = (pageTitle) => {
  document.title = `${pageTitle} | GSPrimo`;
};

const AboutUs = () => {

  const location = useLocation();

  useEffect(() => {
    // Extract the page name from the current location
    const currentPage = location.pathname.split('/').pop();

    // Update the document title with the page name
    setPageTitle(currentPage);
  }, [location]);

  return(
    <>
      {/* <div id="aboutID" className="image-container"> */}
        {/* <div className="overlay"></div> */}
        {/* <img src={Image} alt="about" />
        <div className="text-container">
          <h1>About GSPrimo</h1>
        </div>
      </div> */}
      <section className="hero-aboutus">
        <div className="overlay-services"></div>
        <div className="text-container-project">
          <h1>About us</h1>
        </div>
      </section>
      <AboutUsProjectSection/>
      {/* <AboutUsDescription/> */}
      <Golas/>
      <Team/>
      <AboutUsContactSection/>
      <Footer/>
    </>
  )
}

export default AboutUs;
