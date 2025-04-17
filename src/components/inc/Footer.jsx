import React from "react";
import blue_logo from "../../assets/image/logo/starimpex.ab9bd24d.png";
import gia_logo from "../../assets/image/gia-logo.png";
import hrd_logo from "../../assets/image/hrd-logo.png";
import igi_logo from "../../assets/image/igi-logo.png";
import rapnet_logo from "../../assets/image/rapnet-logo.png";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
const Footer = () => {
  return (
    <footer className="bg-customer-bg/100 ">
      <div className="relative w-full px-3 py-5 md:w-[85%] md:mx-auto ">
        <div className="flex flex-wrap justify-between w-full">
          <div className="w-full md:w-4/12 lg:w-3/12">
            <a href="/">
              <img src={blue_logo} className="w-[80%]" alt="" />
            </a>
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
                {" "}
                <a href="# ">Natural Diamonds</a>{" "}
              </li>
              <li>
                {" "}
                <a href="# ">Lab Grown Diamonds</a>{" "}
              </li>
              <li>
                {" "}
                <a href="# ">Diamond Jewelry</a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-full md:w-4/12 lg:w-3/12">
            <h5 className="mb-5 font-medium">Address</h5>
            <p className="mb-3">
              40, Gyan Prawah Apartment, Singanpor Rd, beside Jeevandeep Society, Jeevandeep Society, Katargam, Surat, Gujarat 395004

            </p>
          </div>
          <div className="w-full md:w-2/12 lg:w-1/12">
            <h5 className="mb-5 font-medium">Quick Links</h5>
            <ul className="flex flex-col gap-4 text-[14px] ">
              <li>
                {" "}
                <a href="# ">About us</a>{" "}
              </li>
              <li>
                {" "}
                <a href="# ">Contact us</a>{" "}
              </li>
              <li>
                {" "}
                <a href="# ">Privacy policy</a>{" "}
              </li>
              <li>
                {" "}
                <a href="# ">Terms & Conditions</a>{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full pt-3 md:flex-row md:justify-between">
          <ul className="flex items-center gap-5 ">
            <li className="w-[30px] h-[30px]">
              <a href="" className="w-full h-full">
                <LuFacebook className="w-full h-full" />
              </a>
            </li>
            <li className="w-[30px] h-[30px]">
              <a href="" className="w-full h-full">
                <FaInstagram className="w-full h-full" />
              </a>
            </li>
            <li className="w-[30px] h-[30px]">
              <a href="" className="w-full h-full">
                <SlSocialLinkedin className="w-full h-full" />
              </a>
            </li>
          </ul>
          <div className="flex flex-row w-3/12 gap-5 ">
            <div className="w-full h-full ">
              <img src={gia_logo} alt="" className="object-contain w-full h-full"  />
            </div>
            <div className="w-full h-full ">
              <img src={hrd_logo} alt="" className="object-contain w-full h-full"  />
            </div>
            <div className="w-full h-full ">
              <img src={igi_logo} alt="" className="object-contain w-full h-full"  />
            </div>
            <div className="w-full h-full ">
              <img src={rapnet_logo} alt="" className="object-contain w-full h-full"  />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-[25px] bg-tertiary text-white text-[14px] ">
        Copyright © 2025 Motiba Gems. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
