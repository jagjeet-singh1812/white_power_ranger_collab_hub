import React from 'react';import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"
import Home from "./Pages/Home/Home"
import Games from "./Pages/Games/Games"
import Community from './Pages/Community/Community';
import Quiz from './Pages/Quiz/Quiz';
import SubjectiveQuiz from './Pages/Quiz/SubjectiveQuiz';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
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
        <Route
          path="/community"
          element={<Community></Community>}
        />
        <Route
          path="/quiz"
          element={<Quiz></Quiz>}
        />
        <Route
          path="/subjectivequiz"
          element={<SubjectiveQuiz></SubjectiveQuiz>}
        />
        <Route
          path="/profile"
          element={<ProfilePage></ProfilePage>}
        />

      </Routes>

    </>
  );
}
export default App;


