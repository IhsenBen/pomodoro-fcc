// Session.jsx
import moment from 'moment';
import React from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Session = ({
  sessionLengthInSeconds, // this is where we accept the props
  incrementSessionLengthByOneMinute,
  decrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment.duration(sessionLengthInSeconds, 's').asMinutes();
  return (
    <div>
      <p id="session-label" >Session</p>
      
      <p id="session-length" className='odometer'>{sessionLengthInMinutes}</p>
      <button className="kbc-button no-container" id="session-increment" onClick={incrementSessionLengthByOneMinute}>
        +
      </button>
      {/* <button className="kbc-button kbc-button-lg" id="session-decrement" onClick={decrementSessionLengthByOneMinute}>
        -
      </button> */}
      <AwesomeButton  id="session-decrement" action={decrementSessionLengthByOneMinute}>-</AwesomeButton>
    </div>
  );
};

export default Session;