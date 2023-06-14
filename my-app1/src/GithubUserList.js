import React from "react";
import { useState } from "react";
import { GetGitHubUser } from "./GetGitHubUser";

export function GitHubUserList(){

    const [username,setUsername] = useState([])

    function handleAddUser(newUsername){
        fetch(`https://api.github.com/users/${newUsername}`)
        .then((res) => res.json())
        .then((data)=> setUsername([...username,data.login])
        )
    }

    return(
        <div>
            <ul>
               <GetGitHubUser AddUsername={handleAddUser}/>
               {username.map((user)=>(
                <li key={user}>{user}</li>
               ))} 
            </ul>
            
        </div>
    )
}