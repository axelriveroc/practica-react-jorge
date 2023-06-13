import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {

   const [isDarkMode, setIsDarkMode] = useState(true);

   const handleToggleTheme = () => {
     setIsDarkMode(!isDarkMode);
   };

  let mode = {
    isDarkMode,
    handleToggleTheme,
  };

  return <ThemeContext.Provider value={mode}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
