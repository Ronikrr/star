import React from 'react'
import Aboutbanner from '../components/Banner'
import aboutbannerimage from '../assets/image/about_page/about-us-hero-image.jpeg'
import OurGuarantee from '../components/OurGuarantee'
import OwnerSection from '../components/OwnerSection'

const About = () => {
  return (
      <div>
      <Aboutbanner title={"about page"} heroImage={aboutbannerimage} />
      <OurGuarantee />
      <OwnerSection />
      </div>
  )
}

export default About