import "./App.css";
import { Routes, Route } from "react-router-dom";
//importing components

import Register from "./pages/register/Register";
import HomePage from "./pages/homepage/HomePage";
import LandingPage from "./pages/landingpage/LandingPage";
import Login from "./pages/login/Login";
import PrivateRoute from "./components/privateroute/PrivateRoute";
import Cookies from 'universal-cookie'

function App() {
  const cookies = new Cookies();
  return (
    <Routes>
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route
    path="/homepage"
    element={<PrivateRoute jwt={cookies.get("token")}> <HomePage /> </PrivateRoute>}
  />        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
