// App.js

import React, { useState } from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';
import { useEffect} from 'react';
import { useRef } from 'react';



function App() {
  const audioElement = useRef(null);
  const [intervalId, setIntervalId] = useState(null);
  const [currentSessionType, setCurrentSessionType] = useState('Session'); 
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300);
  const [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(60 * 25);
  const [timeLeft, setTimeLeft] = useState (sessionLengthInSeconds);

  useEffect(() => {
    setTimeLeft(sessionLengthInSeconds);
    
       console.log('test', sessionLengthInSeconds);
    
}, [sessionLengthInSeconds]);

useEffect(() => {
  
if (timeLeft === 0) {
  audioElement.current.play()
  if(currentSessionType ==='Session'){
    setCurrentSessionType('Break')
    setTimeLeft(breakLengthInSeconds)
  } else if (currentSessionType ==='Break'){
    setCurrentSessionType('Session');
    setTimeLeft(sessionLengthInSeconds);

  }
}
}, [breakLengthInSeconds, currentSessionType, sessionLengthInSeconds, timeLeft ]);


  const decrementBreakLengthByOneMinute = () => {
    const newBreakLengthInSeconds = breakLengthInSeconds - 60;
    if (newBreakLengthInSeconds > 0) {
      setBreakLengthInSeconds(newBreakLengthInSeconds);
    }
  };

  const incrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLengthInSeconds + 60;
    if (newBreakLength <= 60 * 60) {
      setBreakLengthInSeconds(newBreakLength);
    }
  };

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLengthInSeconds = sessionLengthInSeconds - 60;
    if (newSessionLengthInSeconds > 0) {
      setSessionLengthInSeconds(newSessionLengthInSeconds);
    }
  };

  const incrementSessionLengthByOneMinute = () => {
    const newSessionLength = sessionLengthInSeconds + 60;
    if (newSessionLength <= 60 * 60) {
      setSessionLengthInSeconds(sessionLengthInSeconds + 60);
    }
  };

    const isStarted = intervalId !== null;
    const handleStartStopClick = () => {
        if (isStarted) {
         
          clearInterval(intervalId);
          setIntervalId(null);
        } else {
      
          const newIntervalId = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft -1)}, 1000); // TODO: turn back into 1000
          setIntervalId(newIntervalId);
        }
      };

      const handleResetButtonClick = () => {
        // reset audio
        audioElement.current.load();
        // clear the timeout interval
        clearInterval(intervalId);
        // set the intervalId null
        setIntervalId(null);
        // set the sessiontype to 'Session'
        setCurrentSessionType('Session');
        // reset the session length to 25 minutes
        setSessionLengthInSeconds(60 * 25);
        // reset the break length to 5 minutes
        setBreakLengthInSeconds(60 * 5);
        // reset the timer to 25 minutes (initial session length)
        setTimeLeft(60 * 25);
      };

  return (
    <div className="App">
 

      <Break 
        breakLengthInSeconds={breakLengthInSeconds}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      />
         <TimeLeft
         handleResetButtonClick={handleResetButtonClick}
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentSessionType}
        startStopButtonLabel={isStarted ? 'Stop' : 'Start'}
        timeLeft={timeLeft}
      />
      <Session
        sessionLengthInSeconds={sessionLengthInSeconds}
        incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
        decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      />
     
      <audio id="beep" ref={audioElement}>
      <source src="http://tastyspleen.net/~quake2/baseq2/sound/misc/firebell.wav" type="audio/wav" />
      </audio>
    </div>
  );
}

export default App;