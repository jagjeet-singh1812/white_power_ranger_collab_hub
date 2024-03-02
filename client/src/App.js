import React from 'react';import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"
import Dictaphone from './Pages/Home/Home';
import SpeechToText from './Pages/Memory/Memory';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login></Login>}
        />
        {/* <Route
          path="/home"
          element={<SpeechToText/>}
        /> */}
        <Route
          path="/signup"
          element={<SignUp></SignUp>}
        />

      </Routes>

    </>
  );
}
export default App;


