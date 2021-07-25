// Break.jsx
import moment from 'moment';
import React from 'react';

const Break = ({
  breakLengthInSeconds,
  incrementBreakLengthByOneMinute,
  decrementBreakLengthByOneMinute,
}) => {
  const breakLengthInMinutes = moment.duration(breakLengthInSeconds, 's').asMinutes();
  return (
    <div className="break" >
      <h2 className="controlerTitle"  id="break-label">Break</h2>
      <div className="breakDisplay">
        <p className="breaktime" id="break-length" >{breakLengthInMinutes}</p>
      </div>
      
    

      <div className="frameController">
     <button className="btnController" id="break-increment" onClick={incrementBreakLengthByOneMinute}>
       <i>+</i> 
      </button>
      <button className="btnController" id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
        -
      </button>
     </div>
    </div>
  );
};

export default Break;