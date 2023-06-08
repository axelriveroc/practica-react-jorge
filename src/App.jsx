import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/layout/Layout";
import Characters from "./components/pages/characters/Characters";
import Login from "./components/pages/login/Login";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        minHeight: "95vh",
      }}
    >
      <h1>Random Page</h1>
      <Router>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/*" element={<h1>404 Not Found</h1>} />
            </Route>
          </Routes>
        </UserContextProvider>
      </Router>
    </div>
  );
}

export default App;
