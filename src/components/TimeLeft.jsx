import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useState } from 'react';
import { useEffect} from 'react';

momentDurationFormatSetup(moment)


const TimeLeft = ({breakLengthInSeconds, sessionLengthInSeconds}) => {
    const [intervalId, setIntervalId] = useState(null);
    const [currentSessionType, setCurrentSessionType] = useState('Session'); 
    const [timeLeft, setTimeLeft] = useState (sessionLengthInSeconds);
    useEffect(() => {
        setTimeLeft(sessionLengthInSeconds);
        
           console.log('test', sessionLengthInSeconds);
        
    }, [sessionLengthInSeconds]);
    const isStarted = intervalId !== null;
    const handleStartStopClick = () => {
        if (isStarted) {
         
          clearInterval(intervalId);
          setIntervalId(null);
        } else {
      
          const newIntervalId = setInterval(() => {
            setTimeLeft(prevTimeLeft => {
              const newTimeLeft = prevTimeLeft - 1;
              if (newTimeLeft >= 0) {
                console.log("sup I'm just testing the time", newTimeLeft );
                return prevTimeLeft - 1;
              }
           
              if (currentSessionType === 'Session') {
                setCurrentSessionType('Break');
                

                setTimeLeft(breakLengthInSeconds);
              }
              else if (currentSessionType === 'Break') {
                setCurrentSessionType('Session');
               
                setTimeLeft(sessionLengthInSeconds);
              }
            });
          }, 1000); // TODO: turn back into 1000
          setIntervalId(newIntervalId);
        }
      };
    const formattedTimeleft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});
    return (
        <div>
             < p id="timer-label">{currentSessionType}</p>
           <p id="time-left">{formattedTimeleft}</p>
          
           <button id="start_stop" onClick={handleStartStopClick}>
        {isStarted ? 'Stop' : 'Start'}
      </button>
        </div>
    )
}

export default TimeLeft
