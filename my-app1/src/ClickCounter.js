import React from "react";

import { useState } from "react";

export function ClickCounter(){
    const [counter,setCounter] = useState(0)

    function handleIncrement(){
        setCounter(c => c + 1)
    }

    return(
            <div>
                <div>Count: {counter}</div>
                <button onClick={handleIncrement}>Increment</button>
            </div>
    )
}