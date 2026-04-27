import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 mb-4">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Join our newsletter for the latest updates and exclusive offers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 mb-4">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">About Us</Link>
            </li>
            <li>
              <Link to="/service" className="hover:text-white">Services</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info with Zorocrest */}
        <div>
          <div className="flex items-center justify-between mb-4 w-full">
            <h3 className="text-xl font-semibold text-emerald-600">
              Contact Us
            </h3>
            <span className="text-emerald-600 font-bold text-xl">Zorocrest</span>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">
            102A, 14-4C, 1E, Thattan Villai Rd, Ramanputhur<br />
            North Konam, Nagercoil, Tamil Nadu, 629004
          </p>
          <p className="text-sm text-gray-300 mt-2">
            Phone: <a href="tel:+917358780562" className="hover:text-white">+91-7358780562</a>
          </p>
          <p className="text-sm text-gray-300">
            Email: <a href="mailto:info@zoro-tech.com" className="hover:text-white">info@zoro-tech.com</a>
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 mb-4">
            Follow Us
          </h3>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/people/Zoro-Tech/61573915808787/#"
              className="text-gray-300 hover:text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/zoro_._tech/"
              className="text-gray-300 hover:text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/zoro-info-tech/"
              className="text-gray-300 hover:text-white text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Zoro-Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
