import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"
import NavBarHome from './Components/NavBarHome/NavBarHome';
import Home from './Pages/Home/Home';
import Games from './Pages/Games/Games';

function App() {
  return (
    <>
      <NavBarHome></NavBarHome>
      <Routes>
        <Route
          path="/login"
          element={<Login></Login>}
        />
        <Route
          path="/signup"
          element={<SignUp></SignUp>}
        />
        <Route
          path="/home"
          element={<Home></Home>}
        />
        <Route
          path="/games"
          element={<Games></Games>}
        />

      </Routes>

    </>
  );
}

export default App;
