import { Outlet, useParams } from "react-router-dom"
import { GithubUser } from "./GithubUser"

export function ShowGithubUser(){
    const {username = "paolamelch"} = useParams()

    return(
        <>
        <GithubUser username={username}/>
        </>
        
    )
}