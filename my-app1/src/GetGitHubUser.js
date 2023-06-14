import React, { useEffect, useState } from "react";

export function GetGitHubUser({AddUsername}){

    const [username,setUsername ] = useState('')

    function handleInputChange(event){
        setUsername(event.target.value)
    }

    function handleAddUser(){
        AddUsername(username);
        setUsername('');
    }


    return(
        <div>
            <input type="text" name="username" value={username} onChange={handleInputChange}/>
            <button onClick={handleAddUser}>Add</button>
        </div>
    )
}