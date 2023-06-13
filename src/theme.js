import { createTheme } from "@mui/material";

// "linear-gradient(90deg, #42a5f5, white)"
// "linear-gradient(90deg, #e3f2fd, white)",

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5d4037",
      dark: "#607d8b",
    },
    secondary: {
      main: "#388e3c",
    },
    tertiary: {
      main: "#f4511e",
      dark: "white",
    },
    background: {
      default: "#42a5f5",
    },
  },
});


export const ligthTheme = createTheme({
  palette: {
    primary: {
      main: "#5d4037",
      dark: "#607d8b",
    },
    secondary: {
      main: "#388e3c",
    },
    tertiary: {
      main: "#f4511e",
      dark: "white",
    },
    background: {
      default: "#e3f2fd",
    },
  },
});