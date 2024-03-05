import React, { useEffect, useState,useRef } from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import NavBarHome from "../../Components/NavBarHome/NavBarHome";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";

const Home = () => {
  const data = localStorage.getItem("user");
  const name = JSON.parse(data).nickname;

  
  const driverHasRun = useRef(false);
  const navigate = useNavigate();

  const vibrate = () => {
    if ("vibrate" in navigator) {
      navigator.vibrate(1000);
    }
  };
  useEffect(() => {
    vibrate();
    console.log(driverHasRun.current);
    if (localStorage.getItem("ayaa")===null) {
      const driverObj = driver({
        showProgress: true,
        showButtons: ['next', 'previous', 'close'],
        steps: [
          { element: '#start1', popover: { title: `Welcome ${name}`, description: 'Here is a guided tour of this app, showing you its features. Let\'s get started!', side: "left", align: 'start' }},
          { element: '#start2', popover: { title: 'Games', description: 'Explore various games and have fun!', side: "bottom", align: 'start' }},
          { element: '#start3', popover: { title: 'Quiz', description: 'Engage in exciting quizzes to test your knowledge.', side: "bottom", align: 'start' }},
          { element: '#start4', popover: { title: 'Courses', description: 'Access a wide range of educational courses.', side: "left", align: 'start' }},
          { element: '#start5', popover: { title: 'Community', description: 'Connect with others in the community and share your experiences.', side: "top", align: 'start' }},
          { popover: { title: 'Happy Learning!', description: 'That concludes the guided tour. Feel free to explore the app and enjoy your learning journey.' } }
        ]
      });
      driverObj.drive();
      driverHasRun.current = true;
      localStorage.setItem("aaya","ha ho gaya")
    }
    console.log(driverHasRun.current);

    return () => {
      SpeechRecognition.stopListening();
    };
  }, [driverHasRun]);

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    document.getElementById("ids").click();

    if (transcript) {
      const str = transcript.toLowerCase();
      if (str.includes("game")) {
        navigate("/games");
      } else if (str.includes("quiz")) {
        navigate("/quiz");
      } else if (str.includes("course")) {
        navigate("/course");
      } else if (str.includes("community")) {
        navigate("/community");
      } else if (str.includes("profile")) {
        navigate("/profile");
      }
    }
  }, [transcript, navigate]);

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <NavBarHome />
      <br />
      <br />
      <br />

      <p style={{ fontSize: "1.5rem", marginLeft: "45px", fontWeight: "bold" }}>Hello <span id="start1">{name}</span>,</p>

      <div className="sessions-right">
        <div className="total-sessions-count" onClick={() => navigate("/games")} id="start2">
          <p className='sessions-count-heading' >Games</p>
        </div>
        <div className="upcoming-sessions-count" onClick={() => navigate("/quiz")} id="start3">
          <p className='sessions-count-heading' >Quiz</p>
        </div>
        <div className="past-sessions-count" onClick={() => navigate("/course")} id="start4">
          <p className='sessions-count-heading' >Courses</p>
        </div>
        <div className="request-sessions-count" onClick={() => navigate("/community")} id="start5">
          <p className='sessions-count-heading' >Community</p>
        </div>
      </div>
      <button onClick={startListening} id='ids' style={{ display: "none" }}>Start Listening</button>
      <br />
      <br />
      <button id="vibrateButton" style={{display:"none"}}></button>
    </>
  );
};

export default Home;
