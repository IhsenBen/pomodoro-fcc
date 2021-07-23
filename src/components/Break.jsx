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
    <div>
      <p id="break-label">Break</p>
      <p id="break-length">{breakLengthInMinutes}</p>
      <button id="break-increment" onClick={incrementBreakLengthByOneMinute}>
        +
      </button>
      <button id="break-decrement" onClick={decrementBreakLengthByOneMinute}>
        -
      </button>
    </div>
  );
};

export default Break;