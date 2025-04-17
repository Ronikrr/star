import React from 'react'
import Banner from '../components/Banner'
import img from '../assets/image/contactandinqury/contact-us-hero-image.webp'
import InquiryForm from '../components/InquiryForm'
const Inquireloosediamond = () => {
  return (
      <div>
          <Banner title='Inquire for loose diamond' heroImage={img} />
          <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-8 lg:col-start-3">
                  <div className="rounded-3xl shadow-md border border-[#344D64] border-opacity-20 overflow-hidden -mt-[20dvh] mb-16 grid relative z-[1]">
                      <div className="bg-white sm:px-8">
                          <InquiryForm />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Inquireloosediamond