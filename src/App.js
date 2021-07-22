// App.js
import React, { useState } from 'react';
import './App.css';
import Break from './components/Break';
import Session from './components/Session';
import TimeLeft from './components/TimeLeft';

function App() {
  const [breakLengthInSeconds, setBreakLengthInSeconds] = useState(300);
  const [sessionLengthInSeconds, setSessionLengthInSeconds] = useState(60 * 25);

  const decrementBreakLengthByOneMinute = () => {
    const newBreakLengthInSeconds = breakLengthInSeconds - 60;
    if (newBreakLengthInSeconds < 0) {
      setBreakLengthInSeconds(0);
    } else {
      setBreakLengthInSeconds(newBreakLengthInSeconds);
    }
  };
  const incrementBreakLengthByOneMinute = () => setBreakLengthInSeconds(breakLengthInSeconds + 60);

  const decrementSessionLengthByOneMinute = () => {
    const newSessionLengthInSeconds = sessionLengthInSeconds - 60;
    if (newSessionLengthInSeconds < 0) {
      setSessionLengthInSeconds(0);
    } else {
      setSessionLengthInSeconds(newSessionLengthInSeconds);
    }
  };
  const incrementSessionLengthByOneMinute = () =>
    setSessionLengthInSeconds(sessionLengthInSeconds + 60);

  return (
    <div className="App">
      <Break
        breakLengthInSeconds={breakLengthInSeconds}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
      />
      <TimeLeft sessionLengthInSeconds={sessionLengthInSeconds}/>
      <Session
        sessionLengthInSeconds={sessionLengthInSeconds}
        incrementSessionLengthByOneMinute={incrementSessionLengthByOneMinute}
        decrementSessionLengthByOneMinute={decrementSessionLengthByOneMinute}
      />
    </div>
  );
}

export default App;