import React from 'react'
import "./Games.css"
import {Link} from "react-router-dom"
import NavBarHome from '../../Components/NavBarHome/NavBarHome'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { useEffect } from 'react'

const Games = () => {
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const vibrate = () => {
        if ("vibrate" in navigator) {
          navigator.vibrate(2000);
        }
      };

    useEffect(() => {
        vibrate()
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
    if (str.includes("flip") || str.includes("flop")) {
    window.location.href = "/Game.html";
    } else if (str.includes("puzzle") || str.includes("problem")) {
    window.location.href = "/Game2.html";
    } else if (str.includes("baseball") || str.includes("math")) {
    window.location.href = "/baseball";
    }else if(str.includes("back")){
        window.location.href = "/home"
    }

    return (
        <>
        <NavBarHome></NavBarHome>
        <br></br>
        <br></br>
            <div className="sessions-right">
                <a href="/Game.html">
                <div className="game1-flipflop">
                    <p className='sessions-count-heading'>Flip Flop</p>
                </div>
                </a>
                <a href="/Game2.html">
                <div className="game2-tower">
                    <p className='sessions-count-heading'>Puzzle Problem</p>
                </div>
                </a>
                <a href="/baseball">
                <div className="game3-baseball">
                    <p className='sessions-count-heading'>BaseBall Math</p>
                </div>
                </a>
            </div>
            <button onClick={startListening} id='ids' style={{ display: "none" }}>Start Listening</button>
        </>
    )
}

export default Games