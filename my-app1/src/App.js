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
import { FilteredList } from "./FilteredList";


function App(props) {

    // const handleGitHubUserChange = (username) => {
    //     return(
    //         <div>{username.login}</div>
    //     )
    // }
    const [list, setList] = useState([
        { id: 1, name: 'Alice', age: 15 },
        { id: 2, name: 'Paola', age: 26 },
        { id: 3, name: 'Carlo', age: 18 },
        { id: 4, name: 'Paolo', age: 30 }
      ]);

    return (<>
        <Hello/>
        <ClickCounter/>
        <FilteredList list={list}/>
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
