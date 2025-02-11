import { useState } from "react";
import { Icon } from "@iconify/react";
import { Global } from "../../Context/GlobalContext";

const Language = () => {
  const [showLanguage, setShowLanguage] = useState(false);
  const { setLanguage } = Global();

  const toggleLanguage = () => setShowLanguage(!showLanguage);
  const closeDrop = () => setShowLanguage(false);

  return (
    <div className="relative">
      {/* Language Toggle Button */}
      <button
        onClick={toggleLanguage}
        className="p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#879F13]"
        aria-label="Change language"
        aria-expanded={showLanguage}
      >
        <Icon icon="ph:translate-light" width="32" height="32" />
      </button>

      {/* Language Dropdown */}
      {showLanguage && (
        <div
          onBlur={closeDrop}
          className="absolute top-12  language-drop bg-white border border-gray-200 rounded-lg shadow-lg w-48 overflow-hidden z-50 animate-fade-in"
        >
          <div className="flex flex-col p-2">
            {/* French */}
            <button
              className="flex items-center gap-2 p-2 text-gray-700 hover:bg-[--Tertiary-color] rounded-md transition-colors duration-200"
              onClick={() => setLanguage("fr")}
            >
              <Icon icon="twemoji:flag-france" width="20" height="20" />
              <span className="text-sm">French</span>
            </button>

            {/* English */}
            <button
              className="flex items-center gap-2 p-2 text-gray-700 hover:bg-[--Tertiary-color] rounded-md transition-colors duration-200"
              onClick={() => setLanguage("en")}
            >
              <Icon icon="twemoji:flag-united-kingdom" width="20" height="20" />
              <span className="text-sm">English</span>
            </button>

            {/* Arabic */}
            <button
              className="flex items-center gap-2 p-2 text-gray-700 hover:bg-[--Tertiary-color] rounded-md transition-colors duration-200"
              onClick={() => setLanguage("ar")}
            >
              <Icon icon="twemoji:flag-saudi-arabia" width="20" height="20" />
              <span className="text-sm">Arabic</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Language;
