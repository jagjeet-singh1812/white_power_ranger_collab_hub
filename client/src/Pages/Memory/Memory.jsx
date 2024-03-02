import React, { useState, useEffect } from 'react';

const SpeechToTextApp = () => {
  const [transcript, setTranscript] = useState('');
  const st = window.speechRecognition || window.webkitSpeechRecognition
  const recognition = new st();

  useEffect(() => {
    // Configure the recognition settings
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    // Start recognition on mount
    recognition.start();

    // Event listener for when speech is recognized
    recognition.addEventListener('result', (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
    });

    // Clean up when the component unmounts
    return () => {
      recognition.stop();
    };
  }, []);

  return (
    <div>
      <h1>Real-time Speech-to-Text</h1>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToTextApp;
