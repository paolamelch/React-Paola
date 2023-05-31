import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";


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
                <ClickCounter/>
            </>
        )
    }
}