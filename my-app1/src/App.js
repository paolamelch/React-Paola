import React, { useState } from "react";
import {Hello} from "./Hello";
import {Login} from "./Login";
import {UncontrolledLogin} from "./UncontrolledLogin";
import {ToDoList} from "./ToDoList";
import { CounterDisplay } from "./CounterDisplay";
import { GitHubUserList } from "./GithubUserList";
import { ClickCounter } from "./ClickCounter";
import { GithubUser } from "./GithubUser";
import { CarDetails } from "./CarDetails";
import { DisplayContext, LanguageContext } from "./DisplayContext";


function App(props) {

    // const handleGitHubUserChange = (username) => {
    //     return(
    //         <div>{username.login}</div>
    //     )
    // }

    const [language,setLanguage] = useState('en')

    function handleChangeSelect(event){
        setLanguage(event.target.value)
    }
    return (<>
    <select onChange={handleChangeSelect}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
    </select>
    <LanguageContext.Provider value={language}>
        <Hello/>
        <DisplayContext/>
    </LanguageContext.Provider>

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
