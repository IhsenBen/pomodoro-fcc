import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useState } from 'react';
import { useEffect} from 'react';

momentDurationFormatSetup(moment)


const TimeLeft = ({sessionLengthInSeconds}) => {
    const [timeLeft, setTimeLeft] = useState (sessionLengthInSeconds);
    useEffect(() => {
        setTimeLeft(sessionLengthInSeconds);
        
           console.log('test', sessionLengthInSeconds);
        
    }, [sessionLengthInSeconds]);
    const handleStartStopClick = () => {
        setInterval (()=>{
            // console.log(' sup! I m just testing time !');
           setTimeLeft(prevTimeLeft => { const newTimeLeft = prevTimeLeft -1;
            if ( newTimeLeft >= 0){
                return newTimeLeft
            }
             return prevTimeLeft
            });
        } ,1000);
    };

    const formattedTimeleft = moment.duration(timeLeft, 's').format('mm:ss', {trim: false});
    return (
        <div>
           {formattedTimeleft}
           <button onClick={handleStartStopClick}>Start</button>
        </div>
    )
}

export default TimeLeft
