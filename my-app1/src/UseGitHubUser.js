import { useState,useEffect } from "react"

export function useGithubUser(username){
    const [data, setData] = useState('')

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=> response.json())
        .then((data)=> setData(data.name))
      }, []);

    return{data}

}