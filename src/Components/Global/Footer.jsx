import { Icon } from "@iconify/react";
import { Global } from "../../Context/GlobalContext";
import logo from "../../assets/logo_white.png";

const Footer = () => {
  // Destructure the footer translations
  const { translate } = Global();
  const { footer } = translate;
  const { aboutUs, contactUs, followUs } = footer;

  return (
    <footer className="bg-[#879F13] relative bottom-0 text-white py-8 shadow-md mt-[--space-between]">
      {/* Main footer container */}
      <div className="container mx-auto px-4">
        {/* Grid layout for footer sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center place-content-center">
          {/* Logo Section */}
          <div className="flex justify-center sm:justify-start">
            <img src={logo} className="w-56 mb-6 sm:mb-0" alt="Company Logo" />
          </div>

          {/* About Us Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-2">{aboutUs}</h3>
            <p className="text-sm">
              We are committed to providing the best service.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-2">{followUs}</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="mdi:facebook"
                  className="w-6 h-6 hover:text-blue-600"
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="mdi:twitter-circle"
                  className="w-6 h-6 hover:text-blue-400"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  icon="mdi:instagram"
                  className="w-6 h-6 hover:text-pink-500"
                />
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-2">{contactUs}</h3>
            <p className="text-sm">Email: support@yourcompany.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Newsletter Subscription Form */}
        <div className="mt-8 text-center">
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="p-2 w-full sm:w-64 rounded-md sm:rounded-l-md border border-gray-300"
            />
            <button
              type="submit"
              className="bg-[#c2e222] bg-opacity-90 text-white p-2 w-full sm:w-auto rounded-md sm:rounded-r-md hover:bg-opacity-75"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-4">
          <p className="text-sm">© 2023 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
