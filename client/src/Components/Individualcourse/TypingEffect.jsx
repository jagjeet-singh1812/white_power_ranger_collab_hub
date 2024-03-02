// TypingEffect.js
import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
const TypingEffect = ({ text }) => {
  const [typedText, setTypedText] = useState('');

  

  return <>

  <Typewriter
    onInit={(typewriter) => {
      typewriter.typeString(text)
        .callFunction(() => {
          console.log('String typed out!');
        })
        .pauseFor(2500)
        .deleteAll()
        .callFunction(() => {
          console.log('All strings were deleted');
        })
        .start();
    }}
  />
  </>
};

export default TypingEffect;
