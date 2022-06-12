import React, { useEffect, useState } from 'react';

function TimeFun(props) {

    const [Time , setTime] = useState (new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect ( () => {
        const timeE = setInterval (() => tick() ,1000);

        return () => {
            clearInterval(timeE)
        }
    } , [Time]);

    return (
        <div>
            <p>
                {Time.toLocaleTimeString()}
            </p> 
        </div>
    );
}

export default TimeFun;