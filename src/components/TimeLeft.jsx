import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format";
import React from "react";
import "../App.css";


momentDurationFormatSetup(moment);

const TimeLeft = ({
  handleResetButtonClick,
  handleStartStopClick,
  startStopButtonLabel,
  timeLeft,
  timerLabel,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false });

  return (
    <div className="clock">
          
      {/* <p > 
        <Flip value={formattedTimeLeft} /> 
        </p> */}

      <p className="timerLabel" id="timer-label">
        {timerLabel}
      </p>

      <div className="numbers">
        <p className="time" id="time-left">
          {formattedTimeLeft}
        </p>
        <p className="placeholder">88:88</p>
      </div>
<div className="controllers">
<button
        className="startRes"
        id="start_stop"
        onClick={handleStartStopClick}
      >
        {startStopButtonLabel}
      </button>
      <button
        className="startRes"
        id="reset"
        onClick={handleResetButtonClick}
      >
        Reset
      </button>
</div>
    


    </div>
    
  );
};

export default TimeLeft;
