import { Link } from "react-router-dom";

const NavBar = () => {
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
      </ul>
    </nav>
  );
};

export default NavBar;
