// Session.jsx
import moment from "moment";
import React from "react";

const Session = ({
  sessionLengthInSeconds, // this is where we accept the props
  incrementSessionLengthByOneMinute,
  decrementSessionLengthByOneMinute,
}) => {
  const sessionLengthInMinutes = moment
    .duration(sessionLengthInSeconds, "s")
    .asMinutes();
  return (
    <div className="session">
      <h2 id="session-label">Session</h2>
      <div className="sessionDisplay">
        <p className="sessiontime" id="session-length">
          {sessionLengthInMinutes}
        </p>
      </div>

      <div className="frameController">
        <button
          className="btnController"
          id="session-increment"
          onClick={incrementSessionLengthByOneMinute}
        >
          +
        </button>
        <button
          className="btnController"
          id="session-decrement"
          onClick={decrementSessionLengthByOneMinute}
        >
          -
        </button>
      </div>

      {/* <AwesomeButton  id="session-decrement" action={decrementSessionLengthByOneMinute}>-</AwesomeButton> */}
    </div>
  );
};

export default Session;
