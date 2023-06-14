import {  UseHandleLogin } from "./UseHandleLogin";


export function Login() {

    const {data,onChange,onReset} = UseHandleLogin({username: '', password: '', remember: false})

    const isDisabled = !data.username || !data.password;
    return (
        <div>
            <div>
                <input type="text" name="username"
                    value={
                        data.username
                    }
                    onChange={onChange}/>
                <input type="password" name="password"
                    value={
                        data.password
                    }
                    onChange={onChange}/>
                <input type="checkbox" name="remember"
                    checked={
                        data.remember
                    }
                    onChange={onChange}/>
                <input type="button" name="login" value="login"
                    disabled={isDisabled}/>
            </div>
            <div>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}
