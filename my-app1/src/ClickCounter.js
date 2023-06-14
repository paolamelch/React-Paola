import React, { useEffect } from "react";
import { useCounter } from "./UseCounter";

export function ClickCounter(){

    const {counter,onIncrement} = useCounter(0)

    useEffect(() => {
    }, [counter]);

    return(
            <div>
                <div>Count: {counter}</div>
                <button onClick={onIncrement}>Increment</button>
            </div>
    )
}