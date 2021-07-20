import React, { useState } from 'react'


const Break = () => {
    const [breakLength, setBreakLength] = useState (300);
    const decrementBreakLengthByOneMinute = () =>{
        const newBreaklength = breakLength -60;
        if (newBreaklength < 0) {
            setBreakLength(0);
        }
        else{
            setBreakLength(newBreaklength);
         }        
    }
    return  (
        <div>
             <p id="break-label">Break</p>
             <p id="break-length">{breakLength}</p>
        </div>
       
    );
};

export default Break
