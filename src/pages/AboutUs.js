import React from "react";
import "../css/AboutUs.css";
import Footer from "../Components/Footer";
import AboutUsProjectSection from "../Components/AboutUsProjectSection";
import AboutUsContactSection from "../Components/AboutUsContactSection";
import Golas from "../Components/Goals";
import Team from "../Components/Team";

const AboutUs = () => {
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
