import React from 'react';import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login"
import SignUp from "./Pages/SignUp/SignUp"
import Home from "./Pages/Home/Home"
import Games from "./Pages/Games/Games"
import Community from './Pages/Community/Community';
import Courses from './Pages/Courses/Courses';
import Individualcourse from './Components/Individualcourse/Individualcourse';

import Quiz from './Pages/Quiz/Quiz';
import SubjectiveQuiz from './Pages/Quiz/SubjectiveQuiz';



function App() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<Login></Login>}
        />

        <Route
          path="/all"
          element={<Individualcourse/>}
        />
        <Route
          path="/"
          element={<SignUp></SignUp>}
        />
        <Route
          path="/course"
          element={<Courses></Courses>}
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

      </Routes>

    </>
  );
}
export default App;


