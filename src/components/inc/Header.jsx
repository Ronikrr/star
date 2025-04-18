
import React, { useState, useEffect } from "react";
import { TbMessagePlus } from "react-icons/tb";
import logo from '../../assets/image/logo/starimpex-white.94a56f1a.png';
import { FaAngleDown } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";
const Header = () => {
    const [slidebar, setSlidebar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 100);

            if (slidebar && scrollY > 10) {
                setSlidebar(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [slidebar, location]);
    const onclicklink = () => {
        setSlidebar(false);
    }

    return (
        <header className="relative">
            {/* Top Nav */}
            <div className={`fixed top-0 left-0 right-0    transition-all duration-500 z-50   ${isScrolled ? 'bg-tertiary shadow-md' : 'bg-transparent'} py-4`}>
                <NavLink to="/" className="items-center justify-center hidden w-full lg:flex lg:absolute"  >
                    <img
                        src={logo}
                        alt="logo"
                        width={150}
                        height={40}
                        className="object-contain transition duration-500"
                    />
                </NavLink>
                <div className="flex items-center justify-between px-4 lg:px-8">
                    {/* Hamburger Button */}
                    <button className="z-50" onClick={() => setSlidebar(!slidebar)}>
                        <div className="flex flex-col gap-1">
                            <span className={`w-7 h-1 rounded-full transition-all  bg-white  duration-300 ease-in-out ${slidebar ? "rotate-45 translate-y-2 " : ""}`} />
                            <span className={`w-7 h-1 rounded-full transition-all bg-white  duration-300 ease-in-out ${slidebar ? "opacity-0" : ""}`} />
                            <span className={`w-7 h-1 rounded-full transition-all bg-white  duration-300 ease-in-out ${slidebar ? "-rotate-45 -translate-y-2 " : ""}`} />
                        </div>
                    </button>

                    {/* Logo */}
                    <NavLink to="/" className="block lg:hidden"  >
                        <img
                            src={logo}
                            alt="logo"
                            width={150}
                            height={40}
                            className="object-contain transition duration-500"
                        />
                    </NavLink>

                    {/* Auth Buttons */}
                    <div className="flex items-center w-1.5/12 gap-3">



                        <NavLink to="/contact-us"
                            className={`flex  items-center gap-2 border px-2 lg:px-4 py-2 rounded-full transform transition duration-500 ease-in-out hover:scale-110 text-white border-white hover:bg-white hover:text-tertiary
                                    `}
                            >
                                <TbMessagePlus className="w-5 h-5" />
                            <span className="hidden text-sm leading-tight uppercase lg:block">inqury</span>
                        </NavLink>

                    </div>
                </div>
            </div>

            {/* Slidebar Menu */}
            <div className={`fixed top-0 left-0 h-screen w-[300px] bg-tertiary-dark z-40 pt-20 px-6 transition-transform duration-500 ease-in-out ${slidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="flex flex-col h-full gap-5 text-base text-white place-content-center">
                    <li><NavLink onClick={onclicklink} to="/">Home</NavLink></li>
                    <li><NavLink onClick={onclicklink} to="/about-us">About Me</NavLink></li>
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
                                <li><NavLink onClick={onclicklink} to="/our-products/Naturaldiaonds" className=""> Natural Diamonds </NavLink></li>
                                <li><NavLink onClick={onclicklink} to="/our-products/LabGrownDiamonds" className=""> Lab Grown Diamonds </NavLink></li>
                                <li><NavLink onClick={onclicklink} to="/our-products/DiamondJewelry" className=""> Diamond Jewelry </NavLink></li>
                            </ul>
                        )}
                    </li>
                    <li><NavLink onClick={onclicklink} to="/inquiry" className=""> Inquire for Loose Parcel Diamonds </NavLink></li>
                    <li><NavLink onClick={onclicklink} to="/guide" className=""> Diamonds 4C Guide </NavLink></li>
                    <li><NavLink onClick={onclicklink} to="/privacy-policy" className=""> Privacy Policy </NavLink></li>
                    <li><NavLink onClick={onclicklink} to="/terms" className=""> Terms & Conditions </NavLink></li>
                    <li><NavLink onClick={onclicklink} to="/contact-us" className=""> Contact us </NavLink></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
