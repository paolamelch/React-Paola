import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render(){
        const name = "Paola";
        return(
            <>
                <Hello />
                <Welcome 
                name = {name}
                age = {26}
                />
            </>
        )
    }
}