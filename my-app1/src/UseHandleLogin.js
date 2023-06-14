import {useState} from "react"

export function UseHandleLogin() {
    const [data, setData] = useState({username: '', password: '', remember: false})
    
    function handleInputChange(event) {
        const {name, value, type, checked} = event.target
        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleResetButton() {
        setData((data) => {
            return {
                ...data,
                username: '',
                password: '',
                remember: false
            }
        })
    }

    return {data, onChange : handleInputChange,onReset : handleResetButton}

}