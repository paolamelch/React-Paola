import React, {useState} from "react";
import {Hello} from "./Hello";
import {Login} from "./Login";
import {UncontrolledLogin} from "./UncontrolledLogin";
import {ToDoList} from "./ToDoList";
import {CounterDisplay} from "./CounterDisplay";
import {GithubUserList} from "./GithubUserList";
import {ClickCounter} from "./ClickCounter";
import {GithubUser} from "./GithubUser";
import {CarDetails} from "./CarDetails";
import {DisplayContext, LanguageContext} from "./DisplayContext";
import {FilteredList} from "./FilteredList";
import {Link, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {ShowGithubUser} from "./ShowGithubUser";
import { Welcome } from "./Welcome";


export function App(props) {


    return (
        <>
            <div>
                <Link to="/">Home</Link>
                |
                <Link to="/counter">Counter</Link>
                |
                <Link
                    to="/users">Vai alla lista degli user</Link>
            </div>
            <hr/>
            <Routes>
                <Route path="/" element={<Welcome/>}/>
                <Route path="/counter"
                    element={<ClickCounter/>}/>
                <Route path="/users" element={<GithubUserList/>}>
                    <Route index element={<p>Add a user and select it</p>}/>
                    <Route path=":username" element={<ShowGithubUser/>}/>
                </Route>
                <Route path="*" element={
                <div><Link to="/">Go Home</Link>
                    <p>Not found</p>
                </div>
                }/>
            </Routes>

        </>
    )
}
// const handleGitHubUserChange = (username) => {
//     return(
//         <div>{username.login}</div>
//     )
// }
// const [list, setList] = useState([
//     { id: 1, name: 'Alice', age: 15 },
//     { id: 2, name: 'Paola', age: 26 },
//     { id: 3, name: 'Carlo', age: 18 },
//     { id: 4, name: 'Paolo', age: 30 }
// ]);


// state = {
//     language:"en",
// }

// handleLanguageChange = (event) =>{
//     this.setState({language: event.target.value})
// }

// componentDidUpdate(){
//     console.log(this.state);
// }
