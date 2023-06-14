import React from "react";
import {Hello} from "./Hello";
import {Login} from "./Login";
import {UncontrolledLogin} from "./UncontrolledLogin";
import {ToDoList} from "./ToDoList";
import { CounterDisplay } from "./CounterDisplay";
import { GitHubUserList } from "./GithubUserList";
import { ClickCounter } from "./ClickCounter";


function App() {

    const handleGitHubUserChange = (username) => {
        return(
            <div>{username.login}</div>
        )
    }
    return (<>
        <Hello/>
        <ClickCounter/>
        <GitHubUserList/>
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
