import {useState,useEffect} from "react"

export function GithubUser({username}) {
    const [data, setData] = useState('')

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}`)
        .then((response)=> response.json())
        .then((data)=> setData(data.name))
      }, []);
      return (
          <h1>{data}</h1>
      );
    };