import React, { useState } from "react";

// Images
import solyntaLogo from "../../../assets/logos/solynta-logo.png";
import { Link } from "react-router-dom";
import { MdClose, MdMenu, MdMenuOpen } from "react-icons/md";

function Navbar({ isHome, isAboutUs, isPricing, isFaq, isContactUs, isBlog }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex justify-between items-center">
        {/* Left section */}
        <ul className="flex gap-x-16 items-center">
          <li>
            <Link
              className={`${isHome && "text-solyntaBlue font-bold"}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${isAboutUs && "text-solyntaBlue font-bold"}`}
              to="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`${isPricing && "text-solyntaBlue font-bold"}`}
              to="/pricing"
            >
              Pricing
            </Link>
          </li>
        </ul>

        {/* Middle section */}
        <div className="flex flex-col items-center">
          <img src={solyntaLogo} alt="Solynta Academy" className="w-[100px]" />

          <div className="flex gap-x-5 items-center">
            <Link
              to="/auth/login"
              className="mt-5 bg-solyntaYellow text-solyntaBlue h-9 font-semibold w-24 flex justify-center items-center rounded-full"
            >
              Log in
            </Link>
            <Link
              to="/auth/signup"
              className="mt-5 bg-solyntaBlue text-solyntaYellow h-9 font-semibold w-24 flex justify-center items-center rounded-full"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Right section */}
        <ul className="flex gap-x-16 items-center">
          <li>
            <Link className={`${isFaq && "text-solyntaBlue font-bold"}`} to="/faqs">
              Faq
            </Link>
          </li>
          <li>
            <Link
              className={`${isContactUs && "text-solyntaBlue font-bold"}`}
              to="/contact-us"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              className={`${isBlog && "text-solyntaBlue font-bold"}`}
              to="/pricing"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex lg:hidden justify-between items-center">
        <img
          src={solyntaLogo}
          alt="Solynta Academy"
          className="w-[50px] object-contain"
        />
        <MdMenu size={40} onClick={() => setIsMobileMenuOpen(true)} className="cursor-pointer" />
        {/* Left section */}
        {isMobileMenuOpen && (
          <div className="bg-solyntaBlack text-white min-h-screen absolute top-0 right-0 max-w-[80%] w-[80%] z-20 lg:py-10 lg:px-20 p-10">
            <div className="flex justify-end mb-10">
              <MdClose
                size={32}
                color="#FFF"
                onClick={() => setIsMobileMenuOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <ul className="flex flex-col gap-x-16 gap-y-20 h-full">
              <li>
                <Link
                  className={`${isHome && "text-solyntaBlue font-bold"}`}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`${isAboutUs && "text-solyntaBlue font-bold"}`}
                  to="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className={`${isPricing && "text-solyntaBlue font-bold"}`}
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className={`${isFaq && "text-solyntaBlue font-bold"}`}
                  to="/faqs"
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  className={`${isContactUs && "text-solyntaBlue font-bold"}`}
                  to="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className={`${isBlog && "text-solyntaBlue font-bold"}`}
                  to="/pricing"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
