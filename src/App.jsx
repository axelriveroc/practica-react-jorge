import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/layout/Layout";
import Characters from "./components/pages/characters/Characters";
import Login from "./components/pages/login/Login";
import UserContextProvider from "./context/UserContextProvider";
import Mui2 from "./components/pages/MUI/Mui2";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { ligthTheme, theme } from "./theme.js";
import { ThemeContext } from "./context/ThemeContextProvider";
import { useContext } from "react";
import ProductsList from "./components/pages/productsList/ProductsList";
import Favoritos from "./components/pages/favoritos/Favoritos";
import FavoritesContextProvider from "./context/FavoritesContextProvider";

function App() {

    const { isDarkMode } = useContext(ThemeContext);


  /*     const handleToggleTheme = () => {
      setIsDarkMode(!isDarkMode);
    }; */
  return (
    <ThemeProvider theme={ isDarkMode ? theme : ligthTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          minHeight: "95vh",
          backgroundColor: "background.default",
        }}
      >
        <FavoritesContextProvider>

        <h1>Random Page</h1>
        <Router>
          <UserContextProvider>
            
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/mui" element={<Mui2 />} />
                <Route path="/productsList" element={<ProductsList />} />
                <Route path="/favoritos" element={<Favoritos />} />
                <Route path="/*" element={<h1>404 Not Found</h1>} />
              </Route>
            </Routes>
          </UserContextProvider>
        </Router>
        </FavoritesContextProvider>
      </Box>
    </ThemeProvider>
  );
}

export default App;
