import React from 'react'
import Aboutbanner from '../components/Banner'
import aboutbannerimage from '../assets/image/about_page/about-us-hero-image.jpeg'
import OurGuarantee from '../components/OurGuarantee'
import OwnerSection from '../components/OwnerSection'
import video from '../assets/video/c7244fd0b29345d2ab1c5c3d92174df0.mp4'

const About = () => {
  return (
      <div>
      <Aboutbanner title={"about page"}  />

      <OurGuarantee />
      <OwnerSection />
      </div>
  )
}

export default About