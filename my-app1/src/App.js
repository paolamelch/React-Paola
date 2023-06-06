import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";



export class App extends React.Component{

    onLogin = (FormData) => {
        this.setState(FormData)
    }

    
    render(){
        const name = "John";
        return(
            <>
                <Hello />
                <Login passingData={this.onLogin}/>
                <ClickTracker/>
            </>
        )
    }
}