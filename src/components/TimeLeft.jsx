import moment from 'moment'
import momentDurationFormatSetup from 'moment-duration-format'
import React, { useState } from 'react'

momentDurationFormatSetup(moment)


const TimeLeft = ({sessionLengthInSeconds}) => {
    const [timeLeft, setTimeLeft] = useState (sessionLengthInSeconds);

    const formattedTimeleft = moment.duration(timeLeft, 's').format('mm:ss')
    return (
        <div>
           {formattedTimeleft}
        </div>
    )
}

export default TimeLeft
