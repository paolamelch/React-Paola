import useSWR from 'swr'

const fetcher = url => fetch(url).then(res => res.json())

export function useGithubUser(username){
  const {data,error,mutate} = useSWR( username ? null : `https://api.github.com/users/${username}`,fetcher)
    
  function fetchGitHubUser(){
      mutate()
  }

  return{data,error,loading : !data && !error ,onFetchUser: fetchGitHubUser}
  
}




// const [data, setData] = useState('')
// const [loading, setLoading]= useState(false)
// const [error,setError] = useState(null)

// useEffect(() => {
//   setLoading(true)
//   setError(null)
//     fetch(`https://api.github.com/users/${username}`)
//     .then((response)=> {
//       if (response.status !== 200){
//         setError(new Error('User not found'))
//       }

//       return response.json()
//     })
//     .then((json) =>{
//       setData(json.name)
//     })
//     .catch((error) =>{
//       setError(error)
//     })
//     },[username])