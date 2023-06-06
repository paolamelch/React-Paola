import React from "react";

export class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : '',
            password : '',
        }
    }

    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        this.setState({[name] : value})
    }

    handleResetButton = () => {
        this.setState({
            username : '',
            password:'',
        })
    }

    render(){
        const isDisabled = !this.state.username || !this.state.password;
        return(
            <div>
                <div>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                    <input type="button" name="login" value="login" disabled={isDisabled}/>
                </div>
                <div>
                    <button onClick={this.handleResetButton}>Reset</button>
                </div>
            </div>
        )
    }
}