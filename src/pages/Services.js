import React from 'react'
import ServicesCard from '../Components/ServicesCard'
import AboutUsContactSection from '../Components/AboutUsContactSection'
import Footer from '../Components/Footer'
import ServiceDetail from '../Components/ServiceDetail'

const Services = () => {
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