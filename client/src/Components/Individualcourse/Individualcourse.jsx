import React from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';
import './Ind.css';

const Individualcourse = () => {
  const videoId = 'Big_aFLmekI'; // Replace this with your actual video ID
  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1
    }
  };
  return (
    <div>
      <div className="videoSection">
          <div className="videoBox">
     <iframe allowfullscreen="" frameborder="0" src="https://www.youtube.com/embed/tw4jkyfY4HE?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=tw4jkyfY4HE&amp;controls=0" width="900px" height="600px"></iframe>
          </div>
      </div>
    </div>
  );
};

export default Individualcourse;
