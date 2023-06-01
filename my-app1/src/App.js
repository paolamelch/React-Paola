import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { CounterDisplay } from "./CounterDisplay"

export class App extends React.Component{
    render(){
        const name = "John";
        return(
            <>
                <Hello />
                <Welcome 
                name = {name}
                age ={25}
                />
                <CounterDisplay initialValue ={0} incrementBy={1} interval={1000}/>
            </>
        )
    }
}