import React from "react";
import igi_logo from "../../assets/image/igi/igi-footer-logo.svg";
import logo from '../../assets/image/logo/starimpex-white.94a56f1a.png';
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="text-white bg-tertiary ">
      <div className="relative w-full px-3 py-5 md:w-[85%] md:mx-auto ">
        <div className="flex flex-wrap justify-between w-full">
          <div className="w-full md:w-4/12 lg:w-3/12">
            <NavLink to="/">
              <img loading="lazy" src={logo} className="w-[50%]" alt="" />
            </NavLink>
            <div className="w-[80%] mt-2">
              <p className="break-words text-[14px] ">
                A manufacturer and supplier of Natural & Lab Grown Diamonds in
                both Certified & Non Certified in various sizes, color, clarity
                and shapes. as well as custom diamond jewelry.
              </p>
            </div>
          </div>
          <div className="w-full md:w-2/12 lg:w-2/12">
            <h5 className="mb-5 font-medium">Our product</h5>
            <ul className="flex flex-col gap-4 text-[14px] ">
              <li>
                <NavLink to="/our-products/Naturaldiaonds">Natural Diamonds</NavLink>
              </li>
              <li>
                <NavLink to="/our-products/LabGrownDiamonds">Lab Grown Diamonds</NavLink>
              </li>
              <li>
                <NavLink to="/our-products/DiamondJewelry">Diamond Jewelry</NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 lg:w-3/12">
            <h5 className="mb-5 font-medium">Address</h5>
            <address className="not-italic leading-relaxed">
              40, Gyan Prawah Apartment, Singanpor Rd,<br />
              Beside Jeevandeep Society, Katargam,<br />
              Surat, Gujarat 395004
            </address>

          </div>
          <div className="w-full md:w-2/12 lg:w-1/12">
            <h5 className="mb-5 font-medium">Quick Links</h5>
            <ul className="flex flex-col gap-4 text-14 ">
              <li>

                <NavLink to="/about-us">About us</NavLink>
              </li>
              <li>

                <NavLink to="/contact-us">Contact us</NavLink>
              </li>
              <li>

                <NavLink to="/privacy-policy">Privacy policy</NavLink>
              </li>
              <li>

                <NavLink to="/terms">Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full pt-3 md:flex-row md:justify-between">
          <ul className="flex items-center gap-5 ">
            <li className="w-[30px] h-[30px]">
              <NavLink to="" className="w-full h-full">
                <LuFacebook className="w-full h-full" />
              </NavLink>
            </li>
            <li className="w-[30px] h-[30px]">
              <NavLink to="" className="w-full h-full">
                <FaInstagram className="w-full h-full" />
              </NavLink>
            </li>
            <li className="w-[30px] h-[30px]">
              <NavLink to="" className="w-full h-full">
                <SlSocialLinkedin className="w-full h-full" />
              </NavLink>
            </li>
          </ul>
          <div className="flex justify-end w-2/12 gap-5 ">

            <div className="w-5/12 h-full ">
              <img loading="lazy" src={igi_logo} alt="" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center text-center h-[50px] w-full lg:h-[25px] bg-tertiary text-white text-[14px] ">
        Copyright © 2025 Motiba Gems. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
