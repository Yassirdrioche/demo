import { Link } from "react-router-dom";
import { Global } from "../../Context/GlobalContext";
import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";

const SideBar = () => {
  // Access global state for sidebar control and translations
  const { isSideBarOpen, setIsSideBarOpen, translate, setLanguage } = Global();

  // State to manage the visibility of the language dropdown
  const [showLanguage, setShowLanguage] = useState(false);

  // Extract translated text from context
  const { sideBar } = translate;
  const { cart, home, language, title } = sideBar;

  // Ref to detect clicks outside of the language dropdown
  const languageRef = useRef(null);

  // Function to close the language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguage(false);
      }
    };

    // Add event listener when dropdown is open
    if (showLanguage) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguage]);

  return (
    <>
      {/* Sidebar Container */}
      <div
        className={`fixed inset-0 z-[999] transition-transform duration-500 ease-in-out ${
          isSideBarOpen ? "translate-x-0" : "side_bar"
        }`}
      >
        {/* Overlay (clicking outside closes the sidebar) */}
        <div
          onClick={() => setIsSideBarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50"
        ></div>

        {/* Sidebar Panel */}
        <div className="bg-[#879F13] w-64 h-full text-white shadow-xl relative">
          {/* Sidebar Header */}
          <div className="p-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{title}</h3>
            {/* Close Button */}
            <button
              onClick={() => setIsSideBarOpen(false)}
              className="bg-[--secondary-color] hover:text-white transition-colors rounded-md p-1 drop-shadow-xl"
            >
              <Icon icon="ph:x" width="25" height="25" />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="p-4 flex flex-col gap-4">
            {/* Home Link */}
            <Link
              to="/"
              className="p-2 rounded hover:bg-[--Tertiary-color] transition-colors duration-300 flex items-center gap-2"
            >
              <Icon icon="ph:house" width="24" height="24" />
              <span className="mt-1">{home}</span>
            </Link>

            {/* Cart Link */}
            <Link
              to="/cart"
              className="p-2 rounded hover:bg-[--Tertiary-color] transition-colors duration-300 flex items-center gap-2"
            >
              <Icon icon="ph:bag-simple" width="24" height="24" />
              <span className="mt-1">{cart}</span>
            </Link>

            {/* Language Selector */}
            <div
              ref={languageRef} // Attach ref for click detection
              className="p-2 rounded hover:bg-[--Tertiary-color] transition-colors duration-300 flex items-center gap-2 relative"
              onClick={() => setShowLanguage(!showLanguage)}
            >
              <Icon icon="famicons:language-outline" width="24" height="24" />
              <span>{language}</span>

              {/* Language Dropdown */}
              {showLanguage && (
                <div className="absolute top-12 language-drop bg-[--secondary-light-1] border border-gray-200 rounded-lg shadow-lg w-full overflow-hidden z-50 animate-fade-in">
                  <div className="flex flex-col p-2">
                    {/* French Language Option */}
                    <button
                      className="flex items-center gap-2 p-2 text-gray-700 hover:bg-[--Tertiary-color] rounded-md transition-colors duration-200"
                      onClick={() => setLanguage("fr")}
                    >
                      <Icon icon="twemoji:flag-france" width="20" height="20" />
                      <span className="text-sm">French</span>
                    </button>

                    {/* English Language Option */}
                    <button
                      className="flex items-center gap-2 p-2 text-gray-700 hover:bg-[--Tertiary-color] rounded-md transition-colors duration-200"
                      onClick={() => setLanguage("en")}
                    >
                      <Icon
                        icon="twemoji:flag-united-kingdom"
                        width="20"
                        height="20"
                      />
                      <span className="text-sm">English</span>
                    </button>

                    {/* Arabic Language Option */}
                    <button
                      className="flex items-center gap-2 p-2 text-gray-700 hover:bg-[--Tertiary-color] rounded-md transition-colors duration-200"
                      onClick={() => setLanguage("ar")}
                    >
                      <Icon
                        icon="twemoji:flag-saudi-arabia"
                        width="20"
                        height="20"
                      />
                      <span className="text-sm">Arabic</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
