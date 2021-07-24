  
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React from 'react';


momentDurationFormatSetup(moment);

const TimeLeft = ({
  handleResetButtonClick,
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
  timerLabel,
}) => {
  const formattedTimeLeft = moment.duration(timeLeft, 's').format('mm:ss', { trim: false });
  
  return (
    <div className="">
      <p className="text-red-900 text-2xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="odometer" id="time-left">
        {formattedTimeLeft}
      </p>
      <button
      className="kbc-button kbc-button-lg"
        id="start_stop"
        onClick={handleStartStopClick}
      >
        {startStopButtonLabel}
      </button>
      <button className="kbc-button kbc-button-lg"
      
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
    </div>
  );
};

export default TimeLeft;