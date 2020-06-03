import React, { useEffect, useState } from 'react';
import './styles.scss';
import moment from 'moment';

const Timer = ({remainingTime}) => {
    const now = moment();
    const start = moment(remainingTime);
    const difference = start.diff(now);
    const remaining = moment.duration(difference);
    const [remainingSeconds, setRemainingSeconds] = useState(remaining.seconds());
    const [remainingMinutes, setRemainingMinutes] = useState(remaining.minutes());
    const [remainingHours, setRemainingHours] = useState(remaining.hours());

    const timeIsRemaining = () => {
        if(remainingSeconds <= 0 && remainingMinutes <= 0 && remainingHours <= 0){
            return false;
        }
        return true;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (remainingSeconds > 0) {
                setRemainingSeconds(remainingSeconds => remainingSeconds - 1);
            }
            else if (remainingSeconds === 0) {
                setRemainingMinutes(remainingMinutes => remainingMinutes - 1);
                setRemainingSeconds(remainingSeconds => 59);
                if (remainingMinutes === 0) {
                    setRemainingMinutes(remainingMinutes => 59)
                    setRemainingSeconds(remainingSeconds => 59)
                    setRemainingHours(remainingHours => remainingHours - 1)
                }
            }

            return clearInterval(interval);
        }, 1000)
    }, [remainingSeconds, remainingMinutes, remainingHours]);

    return (
        <p className="time-remaining">{timeIsRemaining() ? `${remainingHours}h ${remainingMinutes}m ${remainingSeconds}s` : `Match is completed`}</p>
    )
}

export default Timer;