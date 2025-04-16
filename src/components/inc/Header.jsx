
import React, { useState, useEffect } from "react";
import { FaUserPlus } from "react-icons/fa";
import { TbMessagePlus } from "react-icons/tb";
import logo from '../../assets/image/logo.svg';
import logoDark from '../../assets/image/logo_blue.svg'; // <-- Add a darker version of the logo
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Header = () => {
    const [slidebar, setSlidebar] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
    }, [slidebar]);

    return (
        <header className="relative">
            {/* Top Nav */}
            <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} py-4`}>
                <div className="flex items-center justify-between px-4 lg:px-8">
                    {/* Hamburger Button */}
                    <button className="z-50" onClick={() => setSlidebar(!slidebar)}>
                        <div className="flex flex-col gap-1">
                            <span className={`w-7 h-1 rounded-full transition-all  ${isScrolled ? "bg-black" :"bg-white"}  duration-300 ease-in-out ${slidebar ? "rotate-45 translate-y-2 " : ""}`} />
                            <span className={`w-7 h-1 rounded-full transition-all ${isScrolled ? "bg-black" :"bg-white"}  duration-300 ease-in-out ${slidebar ? "opacity-0" : ""}`} />
                            <span className={`w-7 h-1 rounded-full transition-all ${isScrolled ? "bg-black" :"bg-white"}  duration-300 ease-in-out ${slidebar ? "-rotate-45 -translate-y-2 " : ""}`} />
                        </div>
                    </button>

                    {/* Logo */}
                    <Link href="/">
                        <img
                            src={isScrolled ? logoDark : logo}
                            alt="logo"
                            width={80}
                            height={40}
                            className="object-contain transition duration-500"
                        />
                    </Link>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className={`flex items-center gap-2 border px-2 lg:px-4 py-2 rounded-full transform transition duration-500 ease-in-out hover:scale-110 ${isScrolled ? 'text-[#024093] border-[#024093] hover:bg-[#024093] hover:text-white' : 'text-white border-white hover:bg-white hover:text-[#024093]'
                                }`}
                        >
                            <FaUserPlus className="w-5 h-5" />
                            <span className="hidden text-sm leading-tight uppercase lg:block">Login</span>
                        </Link>

                        <Link to="/contact"
                            className={`hidden items-center gap-2 border px-2 lg:px-4 py-2 rounded-full transform transition duration-500 ease-in-out hover:scale-110 ${isScrolled ? 'text-[#024093] border-[#024093] hover:bg-[#024093] hover:text-white' : 'text-white border-white hover:bg-white hover:text-[#024093]'
                                }`}
                        >
                            <TbMessagePlus className="w-5 h-5" />
                            <span className="hidden text-sm leading-tight uppercase lg:block">Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Slidebar Menu */}
            <div className={`fixed top-0 left-0 h-screen w-[300px] bg-[#042343] z-40 pt-20 px-6 transition-transform duration-500 ease-in-out ${slidebar ? 'translate-x-0' : '-translate-x-full'}`}>
                <ul className="flex flex-col h-full gap-5 text-base text-white place-content-center">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Me</Link></li>
                    <li>
                        <button
                            className="flex items-center justify-between w-full"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <span>Our Product</span>
                            <FaAngleDown className={`transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`} />
                        </button>

                        {showDropdown && (
                            <ul className="mt-2 ml-4 *:mb-3 text-[14px] space-y-2 text-sm bg-[#042343] pt-3 rounded">
                                <li><Link to="#" className="block hover:underline"> Natural Diamonds </Link></li>
                                <li><Link to="#" className="block hover:underline"> Lab Grown Diamonds </Link></li>
                                <li><Link to="#" className="block hover:underline"> Diamond Jewelry </Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link to="#" className="block hover:underline"> Inquire for Loose Parcel Diamonds </Link></li>
                    <li><Link to="#" className="block hover:underline"> Diamonds 4C Guide </Link></li>
                    <li><Link to="#" className="block hover:underline"> Privacy Policy </Link></li>
                    <li><Link to="#" className="block hover:underline"> Contact us </Link></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
