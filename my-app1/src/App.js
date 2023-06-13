import React from "react";
import {Hello} from "./Hello";
import {Welcome} from "./Welcome";
import {Counter} from "./Counter";
import {ClickCounter} from "./ClickCounter";
import {ClickTracker} from "./ClickTracker";
import {InteractiveWelcome} from "./InteractiveWelcome";
import {Login} from "./Login";
import {UncontrolledLogin} from "./UncontrolledLogin";
import {ToDoList} from "./ToDoList";
import {DisplayContext, LanguageContext} from "./DisplayContext";
import { CounterDisplay } from "./CounterDisplay";
import { GetGitHubUser } from "./GetGitHubUser";


function App() {

    const handleCounterChange = (counter) => {
        console.log('Counter is now :', counter);
    };
    return (<>
        <Hello/>
        <Login/>
        <GetGitHubUser username="paolamelch"/>
        <ClickCounter onCounterChange={handleCounterChange}/>
    </>)
}
export default App



// state = {
//     language:"en",
// }

// handleLanguageChange = (event) =>{
//     this.setState({language: event.target.value})
// }

// componentDidUpdate(){
//     console.log(this.state);
// }
