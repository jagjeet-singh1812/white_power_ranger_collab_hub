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
    window.location.href = "/games";
  } else if (str.includes("quiz")) {
    window.location.href = "/quiz";
  } else if (str.includes("course")) {
    window.location.href = "/course";
  } else if (str.includes("community")) {
    window.location.href = "/community";
  } else if (str.includes("profile")) {
    window.location.href = "/profile";
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
        <div className="upcoming-sessions-count" onClick={()=> navigate("/quiz")}>
          <p className='sessions-count-heading'>Quiz</p>
        </div>
        <div className="past-sessions-count" onClick={()=> navigate("/course")}>
          <p className='sessions-count-heading'>Courses</p>
        </div>
        <div className="request-sessions-count" onClick={()=> navigate("/community")}>
          <p className='sessions-count-heading'>Community</p>
        </div>
      </div>
      <button onClick={startListening} id='ids' style={{ display: "none" }}>Start Listening</button>
        <audio autoPlay id='audio-tag'>
            <source src="https://file-examples.com/storage/fe7b7e0dc465e22bc9e6da8/2017/11/file_example_MP3_700KB.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
        </audio>
      <br></br>
      <br></br>

    </>
  );
};

export default Home;
