import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "../navbar/NavBar";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContextProvider";

const Layout = () => {
  const { userData } = useContext(UserContext);
  
  return (
    <div
      style={{
        flexGrow: 15,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%",
        alignItems: "center",
      }}
    >
      <NavBar />
      {!userData && "Aun no te has loggeado! "}
      {userData && <h1>Hola {userData} </h1>}

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
