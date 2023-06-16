import { useParams } from "react-router-dom"
import {useGithubUser } from "./UseGitHubUser"

export function GithubUser() {

    const {username} = useParams()
    
    const {data,error,loading,onFetchUser} = useGithubUser(username)
    
    function handleGetUserData(){
        onFetchUser()
    }
    
    return(
        <div>
            {loading && <h1>Loading...</h1>}
            {error && <h1>There has been an error</h1>}
            {data && <h1>{data.name}</h1>}
            <button onClick={handleGetUserData}>Load User Data</button>
        </div>
    )
}