import React, { useEffect } from "react";

import { useState } from "react";

export function ClickCounter({onCounterChange}){
    const [counter,setCounter] = useState(0)

    function handleIncrement(){
        setCounter(c => c + 1)
    }

    useEffect(() => {
        onCounterChange(counter);
      }, [counter,onCounterChange]);

    return(
            <div>
                <div>Count: {counter}</div>
                <button onClick={handleIncrement}>Increment</button>
            </div>
    )
}