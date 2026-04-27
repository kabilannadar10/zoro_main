import React, { useState, useEffect } from "react";
import {
  RiMenu2Line,
  RiCloseLine,
  RiInstagramLine,
  RiFacebookCircleLine,
  RiGoogleLine,
  RiSeoLine,
  RiPaletteLine,
  RiCodeSSlashLine,
  RiFlutterLine,
  RiBrushLine,
  RiAdvertisementLine,
  RiGlobalLine,
} from "react-icons/ri";

import { FaBullhorn, FaPenNib } from "react-icons/fa";
import { MdWeb, MdDesignServices } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import zoroLogo from "../assets/logo-image.PNG";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  
  const location = useLocation();

  const togglerMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (location.pathname === "/" && scrollY < 100) {
        setNavBg("transparent");
      } else {
        setNavBg("bg-gray-900");
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  // Close dropdown automatically on route change
  useEffect(() => {
    setIsServiceOpen(false);
  }, [location]);

  const iconStyle = "text-green-400 text-lg";

  return (
    <div
      className={`w-80 fixed top-2 left-0 z-50 transition-colors duration-300 ${navBg}`}
    >
      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex w-full h-20 items-center text-white justify-between px-10 lg:px-32">
        <link to="/">
          <img src={zoroLogo} alt="Zoro Logo" width="150px" />
        </link>

        <ul className="flex gap-10 items-center relative">
          <li>
            <Link to="/">Home</Link>
          </li>

          {/* ================= SERVICE MEGA MENU ================= */}
          <li
            className="relative"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <span className="cursor-pointer relative block py-6">
              Service
              <span className="absolute left-1/2 -bottom-1 w-0 h-[2px] bg-emerald-400 transition-all duration-300 hover:w-full hover:left-0"></span>
            </span>

            {/* Mega Dropdown */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 
                        
                          w-[1150px]
                          bg-[#111111] text-white
                          transition-all duration-500 ease-out
                          rounded-md shadow-2xl
                          ${
                            isServiceOpen
                              ? "opacity-100 translate-y-0 pointer-events-auto"
                              : "opacity-0 translate-y-4 pointer-events-none"
                          }`}
            >
              <div className="px-16 py-14 grid grid-cols-4 gap-14">
                {/* Digital Marketing */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    Digital Marketing
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li>
                      <Link
                        to="/socialMediaMarketing"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <FaBullhorn className={iconStyle} /> Social Media
                        Marketing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/facebookMarketing"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiFacebookCircleLine className={iconStyle} /> Facebook
                        Marketing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/instagramMarketing"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiInstagramLine className={iconStyle} /> Instagram
                        Marketing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/contentMarketing"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <FaPenNib className={iconStyle} /> Content Marketing
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/seo"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiSeoLine className={iconStyle} /> SEO
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/googleAds"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiGoogleLine className={iconStyle} /> Google Ads
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/leadGeneration"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiAdvertisementLine className={iconStyle} /> Lead
                        Generation
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/localSEO"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiGlobalLine className={iconStyle} /> Local SEO
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/payPerClick"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiAdvertisementLine className={iconStyle} /> Pay Per
                        Click
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Web Design */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Web Design</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li>
                      <Link
                        to="/webdevelopment"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <MdWeb  className={iconStyle} /> Web Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ecommerceDesign"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <MdDesignServices  className={iconStyle} /> Ecommerce Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ecommerceDevelopment"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiCodeSSlashLine  className={iconStyle} /> Ecommerce
                        Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/ui-ux-Design"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiPaletteLine  className={iconStyle} /> UI UX Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/websiteAutomation"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiCodeSSlashLine  className={iconStyle} /> Website Automation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/landingPageFunnel"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiAdvertisementLine  className={iconStyle} /> Landing Page Funnel
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Branding */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Branding</h3>
                  <ul className="space-y-4 text-gray-300">
                    <li>
                      <Link
                        to="/graphicDesign"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiBrushLine  className={iconStyle} /> Graphic Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/brochureDesign"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiBrushLine  className={iconStyle} /> Brochure Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/flyerDesign"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiBrushLine  className={iconStyle} /> Flyer Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/logoDesign"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiPaletteLine  className={iconStyle} /> Logo Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/conversationAdsDesign"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiAdvertisementLine  className={iconStyle} /> Conversation Ads
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/socialMediaDesign"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiInstagramLine  className={iconStyle} /> Social Media Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/packagingDesignAgency"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiBrushLine  className={iconStyle} /> Packaging Design
                        Agency
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* App Development */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">
                    App Development
                  </h3>
                  <ul className="space-y-4 text-gray-300">
                    <li>
                      <Link
                        to="/flutter"
                        onClick={() => setIsServiceOpen(false)}
                        className="flex items-center gap-3 hover:text-green-400 transition"
                      >
                        <RiFlutterLine  className={iconStyle} /> Flutter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          {["Career", "About", "Contact", "Blogs", "zoro-crest"].map(
            (label, i) => (
              <li key={i}>
                <Link
                  to={label === "Blogs" ? "/blog" : `/${label.toLowerCase()}`}
                >
                  {label}
                </Link>
              </li>
            ),
          )}

          <li>
            <a
              href="https://attendance-frontend-opal.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Academy
            </a>
          </li>

          <li>
            <Link to="/login">Business-Team</Link>
          </li>
        </ul>
      </div>

      {/* ================= MOBILE HEADER ================= */}
      <div className="md:hidden flex justify-between items-center w-full h-[80px] px-6 text-white">
        <Link to="/" onClick={() => isOpen && togglerMenu()}>
          <img src={zoroLogo} alt="Zoro Logo" className="w-[120px]" />
        </Link>
        <button onClick={togglerMenu} className="text-3xl focus:outline-none">
          <RiMenu2Line />
        </button>
      </div>

      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[90] md:hidden backdrop-blur-sm"
          onClick={togglerMenu}
        ></div>
      )}

      {/* ================= MOBILE MENU DRAWER ================= */}
      <div
        className={`fixed top-0 left-0 w-[85%] max-w-sm h-screen bg-[#111111] text-white z-[100] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden shadow-2xl`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 h-[80px] border-b border-gray-800 shrink-0">
          <Link to="/" onClick={togglerMenu}>
            <img src={zoroLogo} alt="Zoro Logo" className="w-[120px]" />
          </Link>
          <button onClick={togglerMenu} className="text-3xl text-gray-400 hover:text-white transition focus:outline-none">
            <RiCloseLine />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-grow overflow-y-auto px-6 py-8 flex flex-col gap-6">
          <Link to="/" onClick={togglerMenu} className="text-lg font-medium hover:text-emerald-400 transition tracking-wide">
            Home
          </Link>

          {/* Service Accordion for Mobile */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsServiceOpen(!isServiceOpen)}
              className="flex items-center justify-between text-lg font-medium hover:text-emerald-400 transition w-full text-left tracking-wide"
            >
              Services
              <span className={`text-sm transform transition-transform duration-300 ${isServiceOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>
            <div className={`mt-2 flex flex-col pl-4 gap-6 overflow-hidden transition-all duration-300 ease-in-out ${isServiceOpen ? "max-h-[1500px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}>
              {/* Digital Marketing */}
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-emerald-400 text-[13px] tracking-widest uppercase mb-1 opacity-80">
                  Digital Marketing
                </h4>
                <Link to="/socialMediaMarketing" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Social Media Marketing</Link>
                <Link to="/facebookMarketing" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Facebook Marketing</Link>
                <Link to="/instagramMarketing" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Instagram Marketing</Link>
                <Link to="/contentMarketing" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Content Marketing</Link>
                <Link to="/seo" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">SEO</Link>
                <Link to="/googleAds" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Google Ads</Link>
                <Link to="/leadGeneration" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Lead Generation</Link>
                <Link to="/localSEO" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Local SEO</Link>
                <Link to="/payPerClick" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Pay Per Click</Link>
              </div>
              {/* Web Design */}
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-emerald-400 text-[13px] tracking-widest uppercase mb-1 opacity-80 mt-2">
                  Web Design
                </h4>
                <Link to="/webdevelopment" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Web Development</Link>
                <Link to="/ecommerceDesign" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Ecommerce Design</Link>
                <Link to="/ecommerceDevelopment" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Ecommerce Development</Link>
                <Link to="/ui-ux-Design" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">UI UX Design</Link>
                <Link to="/websiteAutomation" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Website Automation</Link>
                <Link to="/landingPageFunnel" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Landing Page Funnel</Link>
              </div>
              {/* Branding */}
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-emerald-400 text-[13px] tracking-widest uppercase mb-1 opacity-80 mt-2">
                  Branding
                </h4>
                <Link to="/graphicDesign" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Graphic Design</Link>
                <Link to="/brochureDesign" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Brochure Design</Link>
                <Link to="/flyerDesign" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Flyer Design</Link>
                <Link to="/logoDesign" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Logo Design</Link>
                <Link to="/conversationAdsDesign" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Conversation Ads</Link>
                <Link to="/socialMediaDesign" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Social Media Design</Link>
                <Link to="/packagingDesignAgency" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Packaging Design</Link>
              </div>
              {/* App Development */}
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-emerald-400 text-[13px] tracking-widest uppercase mb-1 opacity-80 mt-2">
                  App Development
                </h4>
                <Link to="/flutter" onClick={togglerMenu} className="text-base text-gray-300 hover:text-white">Flutter</Link>
              </div>
            </div>
          </div>

          {["Career", "About", "Contact", "Blogs", "zoro-crest"].map((label, i) => (
            <Link
              key={i}
              to={label === "Blogs" ? "/blog" : `/${label.toLowerCase()}`}
              onClick={togglerMenu}
              className="text-lg font-medium hover:text-emerald-400 transition tracking-wide"
            >
              {label}
            </Link>
          ))}

          <a
            href="https://attendance-frontend-opal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={togglerMenu}
            className="text-lg font-medium hover:text-emerald-400 transition tracking-wide"
          >
            Academy
          </a>

          <Link to="/login" onClick={togglerMenu} className="text-lg font-medium hover:text-emerald-400 transition tracking-wide">
            Business-Team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
