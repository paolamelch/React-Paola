import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Age } from "./Age";

export class App extends React.Component{
    render(){
        const name = "John";
        return(
            <>
                <Hello />
                <Welcome 
                name = {name}
                age ={70}
                />
            </>
        )
    }
}