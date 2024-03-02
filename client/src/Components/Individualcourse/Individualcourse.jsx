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
const Individualcourse = () => {
  // Text to summarize
  const [textd,settext]=useState("");
  const [t,st]=useState(false);
  const textToSummarize = `
    The scientific community was abuzz with excitement when the team of researchers successfully detected gravitational waves, confirming a major prediction of Albert Einstein's theory of general relativity
  `;

  const videoId = 'pp59n0So-XE';
  const summarizeText = async (text) => {
    try {
     
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `summarize the text such that could be understand by 5 years child the text is ${textToSummarize}.`
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
  settext(text);
  st(true);
      // You need to process the generated summary according to your requirements
    } catch (error) {
      console.error('Error generating summary:', error.message);
    }
  };


  useEffect(() => {
    summarizeText(textToSummarize);
    // Uncomment and modify the following code if you plan to use YouTube transcript fetching
    // const fetchTranscript = async () => {
    //   try {
    //     const transcript = await YoutubeTranscript.fetchTranscript(videoId);
    //     console.log(transcript);
    //   } catch (error) {
    //     console.error('Error fetching transcript:', error);
    //   }
    // };
    // fetchTranscript();
  }, []);

  return (
    <div>
      <div className="videoSection">
        <div className="videoBox">
          <iframe
            allowFullScreen=""
            frameBorder="0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0`}
            width="900px"
            height="600px"
          ></iframe>
        </div>
      </div>
      <h1>Summary :</h1>
      {/* <p>{textd}</p> */}
      <div className="summaryContainer">
      {/* <p className="summaryText">{textd}</p> */}
      <p>{t && <TypingEffect text={textd} />}</p>
    </div>
    </div>
  );
};

export default Individualcourse;
