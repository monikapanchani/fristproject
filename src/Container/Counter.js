// import { useState } from "react";
import React, {useState} from 'react';

function Counter(props) {

    let [Count, setCount] = useState(0);

    const int = () => {
        if(Count < 10){
            setCount(Count+1);
        }
    }

    const dec = () => {
        if(Count > 0){
            setCount(Count-1);
        }
    }

    return (
        <div>
            <button onClick={ () => int()}>Increment</button>
            <p>{Count}</p>
            <button onClick={ () => dec()}>decrement</button>
        </div>
    );
}

export default Counter;
