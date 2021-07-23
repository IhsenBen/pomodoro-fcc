  
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
    <div className="flex flex-col justify-evenly items-center w-64 h-64 bg-red-600 rounded-full">
      <p className="text-red-900 text-2xl" id="timer-label">
        {timerLabel}
      </p>
      <p className="font-clock text-4xl font-bold" id="time-left">
        {formattedTimeLeft}
      </p>
      <button
        id="start_stop"
        onClick={handleStartStopClick}
      >
        {startStopButtonLabel}
      </button>
      <button
      
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
    </div>
  );
};

export default TimeLeft;