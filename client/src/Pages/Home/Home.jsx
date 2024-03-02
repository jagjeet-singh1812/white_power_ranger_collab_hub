import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import NavBarHome from "../../Components/NavBarHome/NavBarHome"

const Home = () => {

  const data = localStorage.getItem("user");
  const name = JSON.parse(data).nickname;

  const navigate = useNavigate()

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    document.getElementById("ids").click()

    return () => {
      SpeechRecognition.stopListening()
    }
  }, [])

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  console.log(transcript)
  const str = transcript.toLowerCase();
  if (str.includes("game")) {
    navigate("/games")
  } else if (str.includes("quiz")) {
    navigate("/quiz")
  } else if (str.includes("course")) {
    navigate("/course")
  } else if (str.includes("community")) {
    navigate("/community")
  } else if (str.includes("profile")) {
    navigate("/profile")
  }


  return (
    <>
    <NavBarHome></NavBarHome>
      <br></br>
      <br></br>
      <br></br>

      <p style={{fontSize:"1.5rem",marginLeft:"45px",fontWeight:"bold"}}>Hello {name},</p>

      <div className="sessions-right">
        <div className="total-sessions-count" onClick={() => navigate("/games")}>
          <p className='sessions-count-heading'>Games</p>
        </div>
        <div className="upcoming-sessions-count" onClick={() => navigate("/quiz")}>
          <p className='sessions-count-heading'>Quiz</p>
        </div>
        <div className="past-sessions-count">
          <p className='sessions-count-heading'>Courses</p>
        </div>
        <div className="request-sessions-count" onClick={()=>navigate("/community")}>
          <p className='sessions-count-heading'>Community</p>
        </div>
      </div>
      <button onClick={startListening} id='ids' style={{ display: "none" }}>Start Listening</button>

      <br></br>
      <br></br>

    </>
  );
};

export default Home;
