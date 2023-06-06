import React from "react";
import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { ToDoList } from "./ToDoList";
import { DisplayContext, LanguageContext } from "./DisplayContext";




export class App extends React.Component{

    state = {
        language:"en",
    }

    handleLanguageChange = (event) =>{
        this.setState({language: event.target.value})
    }

    componentDidUpdate(){
        console.log(this.state);
    }
    render(){
        const name = "John";
        return(
            <>
            <select value={this.state.language} onChange={this.handleLanguageChange}>
                <option value="en">English</option>
                <option value="it">Italiano</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
                <DisplayContext/>
            </LanguageContext.Provider>
                <Hello />
                <ClickTracker/>
            </>
        )
    }
}