
import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { TbMessagePlus } from "react-icons/tb";
import logoDark from '../../assets/image/logo/starimpex.ab9bd24d.png'; // <-- Add a darker version of the logo
import { FaAngleDown } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
    const [slidebar, setSlidebar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    
    const location = useLocation()
    const onclicklink = () => {
        setSlidebar(false);
    }

    return (
        <header className="relative">
            {/* Top Nav */}
            <div className={`fixed top-0 left-0 right-0  transition-all duration-500 z-50   bg-white shadow-md py-4`}>
                <Link href="/" className="items-center justify-center hidden w-full lg:flex lg:absolute" >
                    <img
                        src={logoDark}
                        alt="logo"
                        width={150}
                        height={40}
                        className="object-contain transition duration-500"
                    />
                </Link>
                <div className="relative flex items-center justify-between px-4 lg:px-8 ">
                    {/* Hamburger Button */}
                    <button className="z-50" onClick={() => setSlidebar(!slidebar)}>
                        <div className="flex flex-col gap-1">
                            <span className={`w-7 h-1 rounded-full transition-all  bg-tertiary duration-300 ease-in-out ${slidebar ? "rotate-45 translate-y-2 " : ""}`} />
                            <span className={`w-7 h-1 rounded-full transition-all bg-tertiary duration-300 ease-in-out ${slidebar ? "opacity-0" : ""}`} />
                            <span className={`w-7 h-1 rounded-full transition-all bg-tertiary  duration-300 ease-in-out ${slidebar ? "-rotate-45 -translate-y-2 " : ""}`} />
                        </div>
                    </button>

                    {/* Logo */}

                    <Link href="/" className="block lg:hidden" >
                        <img
                            src={logoDark}
                            alt="logo"
                            width={150}
                            height={40}
                            className="object-contain transition duration-500"
                        />
                    </Link>
                    {/* Auth Buttons */}
                    <div className="flex items-center w-1.5/12 gap-3">
                        <Link
                            to="/login"
                            className={`flex items-center gap-2 border px-2 lg:px-4 py-2 rounded-full transform transition duration-500 ease-in-out hover:scale-110 text-tertiary border-tertiary hover:bg-tertiary hover:text-white }`}
                        >
                            <FaUserPlus className="w-5 h-5" />
                            <span className="hidden text-sm leading-tight uppercase lg:block">Login</span>
                        </Link>
                        {location.pathname !== '/' && (

                            <Link to="/contact-us"
                                className={`flex  items-center gap-2 border px-2 lg:px-4 py-2 rounded-full transform transition duration-500 ease-in-out hover:scale-110 text-tertiary border-tertiary hover:bg-tertiary hover:text-white
                                    }`}
                            >
                                <TbMessagePlus className="w-5 h-5" />
                                <span className="hidden text-sm leading-tight uppercase lg:block">Contact Us</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Slidebar Menu */}
            <div className={`fixed top-0 left-0 z-auto h-screen w-[300px] bg-tertiary z-40 pt-20 px-6 transition-transform duration-500 ease-in-out ${slidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="flex flex-col h-full gap-5 text-base text-white place-content-center">
                    <li><Link onClick={onclicklink} to="/">Home</Link></li>
                    <li><Link onClick={onclicklink} to="/about-us">About Me</Link></li>
                    <li>
                        <button
                            className="flex items-center justify-between w-full"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <span>Our Product</span>
                            <FaAngleDown className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`} />
                        </button>

                        {showDropdown && (
                            <ul className="mt-2 ml-4 *:mb-3 text-[14px] space-y-2 text-sm bg-transparent pt-3 rounded">
                                <li><Link onClick={onclicklink} to="/our-products/Naturaldiaonds" className=""> Natural Diamonds </Link></li>
                                <li><Link onClick={onclicklink} to="/our-products/LabGrownDiamonds" className=""> Lab Grown Diamonds </Link></li>
                                <li><Link onClick={onclicklink} to="/our-products/DiamondJewelry" className=""> Diamond Jewelry </Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link onClick={onclicklink} to="/inquiry" className=""> Inquire for Loose Parcel Diamonds </Link></li>
                    <li><Link onClick={onclicklink} to="/guide" className=""> Diamonds 4C Guide </Link></li>
                    <li><Link onClick={onclicklink} to="/privacy-policy" className=""> Privacy Policy </Link></li>
                    <li><Link onClick={onclicklink} to="/terms" className=""> Terms & Conditions </Link></li>
                    <li><Link onClick={onclicklink} to="/contact-us" className=""> Contact us </Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
