import { useState } from "react"


export function Login(){
    const [data,setData] = useState({
        username:'',
        password:'',
        remember:false
    })

    function handleInputChange(event){
        const {name,value,type,checked} = event.target
        setData((data)=>{
            return{
                ...data,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    function handleResetButton(){
        setData((data) =>{
            return{
                ...data,
                username : '',
                password : '',
                remember : false
            }
        })
    }

    console.log(data);
    const isDisabled = !data.username || !data.password;
    return(
    <div>
        <div>
            <input type="text" name="username" value={data.username} onChange={handleInputChange}/>
            <input type="password" name="password" value={data.password} onChange={handleInputChange}/>
            <input type="checkbox" name="remember" checked={data.remember} onChange={handleInputChange}/>
            <input type="button" name="login" value="login" disabled={isDisabled}/>
        </div>
        <div>
            <button onClick={handleResetButton}>Reset</button>
        </div>
    </div>
    )
}