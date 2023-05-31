import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";



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
                <ClickTracker/>
            </>
        )
    }
}