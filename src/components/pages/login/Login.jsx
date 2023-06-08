import { Button, TextField } from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUserData, userData } = useContext(UserContext);
  const [name, setName] = useState("");
  const navigate = useNavigate(); // Obtén la función navigate del hook useNavigate
  if (userData) {
    navigate("/"); // Redirige a la ruta deseada utilizando navigate
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
    setUserData(name);
  };

  return (
    <form
      action=""
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "15px",
        width: "60%",
      }}
      onSubmit={handlerSubmit}
    >
      <TextField
        label="Nombre"
        variant="filled"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button variant="contained" type="submit">
        Ingresar
      </Button>
    </form>
  );
};

export default Login;
