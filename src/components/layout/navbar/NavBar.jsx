import { ThemeContext } from "../../../context/ThemeContextProvider"
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";



const NavBar = () => {

    
  const { isDarkMode, handleToggleTheme } = useContext(ThemeContext);


  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <ul style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Inicio</Link>
        <Link to="/login">Login</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/productsList">Products List</Link>
        <Link to="/mui">Material UI</Link>
        <IconButton onClick={handleToggleTheme}>
          {
            isDarkMode? <Brightness4 /> : <Brightness7 />
          }
        </IconButton>
      </ul>
    </nav>
  );
};

export default NavBar;
