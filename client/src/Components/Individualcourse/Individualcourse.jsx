import React, { useEffect, useState } from 'react';
// import YouTube from 'react-youtube';
// import { motion } from 'framer-motion';
import './Ind.css';
// import YoutubeTranscript from 'youtube-transcript';
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import TypingEffect from './TypingEffect';

// Fetch your API_KEY
const API_KEY = "AIzaSyAqu8gVHmRu4z0ZR3CszNf1n6dScysDkJ4";

// Access your API key
const genAI = new GoogleGenerativeAI(API_KEY);

// Get a generative model
const Individualcourse = ({cou}) => {
  // Text to summarize
  const [textd, settext] = useState("");
  const [sum, setSum] = useState("");
  const [t, st] = useState(false);

  const video_id="23_mESawEEc"
  // const video_id=cou;
  const genSum = () => {
    axios.post('https://036w8f25-3001.inc1.devtunnels.ms/summary',{video_id:video_id})
      .then(response => {
        setSum('Response:', response.data.text);
        summarizeText(response.data.text)
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  const videoId = 'Big_aFLmekI';
  const summarizeText = async (text) => {
    try {

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = `summarize the text such that could be understand by 5 years child the text is ${text}.`
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const textt = response.text();
      console.log(textt);
      settext(textt);
      st(true);
      // You need to process the generated summary according to your requirements
    } catch (error) {
      console.error('Error generating summary:', error.message);
    }
  };

  return (
    <div>
      <div className="videoSection">
        <div className="videoBox">
          <iframe
            allowFullScreen=""
            frameBorder="0"
            src={`https://www.youtube.com/embed/${video_id}?autoplay=1&mute=1&loop=1&playlist=${video_id}&controls=0`}
            width="900px"
            height="600px"
          ></iframe>
        </div>
      </div>
      
      <center>
        <button onClick={genSum} style={{backgroundColor:"rgba(32, 59, 232)",color:"white",padding:"10px 20px",fontSize:"1.25rem",borderRadius:"10px"}}>Summarize the video</button>
      </center>
      <h1>Summary :</h1>
      {/* <p>{textd}</p> */}
      <div className="summaryContainer">
        {/* <p className="summaryText">{textd}</p> */}
        <p>{t ?<TypingEffect text={textd} />:<>Generating  Summary...</>}</p>
      </div>
    </div>
  );
};

export default Individualcourse;
