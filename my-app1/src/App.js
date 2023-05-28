import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";


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
                <Counter initialValue ={0} incrementBy={1} interval={1000}/>
            </>
        )
    }
}