import React from 'react'
import Banner from '../components/Banner'
import img from '../assets/image/contactandinqury/contact-us-hero-image.webp'
import { Link } from 'react-router-dom'
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlinePhone } from "react-icons/hi";
import ContactUsForm from '../components/Contactusfrom'
const Contactuspage = () => {
  return (
      <div>
          <Banner title='Contact Us' heroImage={img} />
          <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-10 lg:col-start-2">
                  <div className="rounded-3xl shadow-md border border-[#344D64] border-opacity-20 overflow-hidden -mt-[20dvh] mb-16 grid md:grid-cols-[1fr_2fr] relative z-[1]">
                      <div className="grid h-full bg-white">
                          <div className="grid h-full px-3 py-8 bg-tertiary text-secondary md:rounded-3xl place-content-center md:px-8">
                              <h3 className="text-center uppercase sub-title">
                                  contact information
                              </h3>
                              <ul className="grid gap-5 px-1 py-4 mb-5 place-content-center">
                                  <li>
                                      <a href={`tel:+919601600500`} className="flex gap-2">
                                          <HiOutlinePhone/>
                                          <span>+919601600500</span>
                                      </a>
                                  </li>
                                  <li>
                                      <a href={`mailto:info@starimpex.store`} className="flex gap-2">
                                          <HiOutlineMail />
                                          <span>info@starimpex.store</span>
                                      </a>
                                  </li>
                                  <li>
                                      <Link
                                          to={""}
                                          target="_blank"
                                          className="flex items-start gap-2"
                                      >
                                          <SlLocationPin/>
                                          <span>40, Gyan Prawah Apartment, Singanpor Rd, beside Jeevandeep Society, Jeevandeep Society, Katargam, Surat, Gujarat 395004</span>
                                      </Link>
                                  </li>
                              </ul>
                              <div className="mb-5 ">
                           
                                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.1173713794938!2d72.82181947540279!3d21.223649480474926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f48af4f3e6d%3A0x39224423e4d8d18c!2sStar%20Impex!5e1!3m2!1sen!2sin!4v1744879943762!5m2!1sen!2sin" height="200"
                                      className="w-full mx-auto border-0 rounded-lg "
                                      allowFullScreen={false}
                                      loading="lazy"
                                      referrerPolicy="no-referrer-when-downgrade"></iframe>
                              </div>
                          </div>
                      </div>
                      <div className="bg-white sm:px-5">
                          <ContactUsForm />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Contactuspage