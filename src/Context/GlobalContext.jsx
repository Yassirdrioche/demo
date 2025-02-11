import { createContext, useState, useContext, useEffect } from "react";
import translation from "../Data/translate.json";
import translationAr from "../Data/translate-ar.json";
import translationFr from "../Data/translate-fr.json";

// Create Global Context
export const GlobalContext = createContext();

// Global Provider
export const GlobalProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // Load saved language or default to English
  const savedLanguage = localStorage.getItem("language") || "en";

  // Get initial translation & direction
  const getInitialTranslation = () => {
    switch (savedLanguage) {
      case "fr":
        return translationFr;
      case "ar":
        return translationAr;
      default:
        return translation;
    }
  };

  const getInitialDirection = () => (savedLanguage === "ar" ? "rtl" : "ltr");

  const [translate, setTranslation] = useState(getInitialTranslation());
  const [direction, setDirection] = useState(getInitialDirection());

  // Function to change language & update direction
  const setLanguage = (lang) => {
    localStorage.setItem("language", lang); // Save in localStorage

    switch (lang) {
      case "fr":
        setTranslation(translationFr);
        setDirection("ltr");
        break;
      case "ar":
        setTranslation(translationAr);
        setDirection("rtl");
        break;
      default:
        setTranslation(translation);
        setDirection("ltr");
    }
  };

  // Apply direction to <html> when it changes
  useEffect(() => {
    document.documentElement.dir = direction;
  }, [direction]);

  return (
    <GlobalContext.Provider
      value={{
        translate,
        setLanguage,
        direction, // Expose direction if needed
        isSideBarOpen,
        setIsSideBarOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// Custom Hook
export const Global = () => useContext(GlobalContext);

export default GlobalProvider;
