import { useEffect, useState } from "react";
import Navlinks from "./Navlinks";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";
import SideBar from "./SideBar";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  // State to track whether the page is scrolled down
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    // Initialize AOS animations with a duration of 1500ms
    AOS.init({ duration: 1500 });

    const handleScroll = () => {
      // If the user scrolls past 50px, add a shadow and change the background
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add an event listener to detect scrolling
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
          isScrolled
            ? "shadow-md py-3 navbar-transalate bg-white" // Navbar with shadow when scrolled
            : "py-3 bg-transparent backdrop-blur-lg" // Transparent navbar when at the top
        }`}
        data-aos="fade-down" // AOS animation for fade-down effect
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-3 items-center">
            {/* Left Side - Menu Icon */}
            <div className="flex justify-start">
              <MenuIcon />
            </div>

            {/* Center - Logo */}
            <div className="flex justify-center">
              <Logo />
            </div>

            {/* Right Side - Navigation Links */}
            <div className="flex justify-end">
              <Navlinks />
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar Component for Mobile Menu (Off-screen Navigation) */}
      <SideBar />

      {/* Add Padding to Prevent Layout Shift */}
      {/* (Ensures content is not hidden behind the fixed navbar) */}
    </>
  );
};

export default Navbar;
