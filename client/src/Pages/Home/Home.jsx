import React, { useEffect } from 'react'
import "./Home.css"
import { useNavigate } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Home = () => {

    const navigate=useNavigate()

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    useEffect(()=>{
        document.getElementById("ids").click()

        return ()=>{
            SpeechRecognition.stopListening()
        }
    }, [])

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    console.log(transcript)
    const str = transcript.toLowerCase();
    if(str.includes("game")){
        navigate("/games")
    }else if(str.includes("quiz")){
        navigate("/quiz")
    }else if(str.includes("course")){
        navigate("/course")
    }else if(str.includes("community")){
        navigate("/community")
    }else if(str.includes("profile")){
        navigate("/profile")
    }


    return (
        <>

            <div className="sessions-right">
                <div className="total-sessions-count" onClick={()=>navigate("/games")}>
                    <p className='sessions-count-heading'>Games</p>
                </div>
                <div className="upcoming-sessions-count">
                    <p className='sessions-count-heading'>Quiz</p>
                </div>
                <div className="past-sessions-count">
                    <p className='sessions-count-heading'>Courses</p>
                </div>
                <div className="request-sessions-count">
                    <p className='sessions-count-heading'>Community</p>
                </div>
            </div>
            <button onClick={startListening} id='ids' style={{display: "none"}}>Start Listening</button>

            <br></br>
            <br></br>

        </>
    )
}

export default Home