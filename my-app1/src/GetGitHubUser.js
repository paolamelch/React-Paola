import React from "react";

export function GetGitHubUser({username}){

    fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then(console.log)
    return(
        <div>

        </div>
    )
}