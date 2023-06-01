import React from "react";

export class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username : "",
            password : "",
        }
    }

    handleUsernameChange = (event) => {
        this.setState({username : event.target.value})
    }

    handlePasswordChange = (event) => {
        this.setState({password : event.target.value})
    }

    //non sono riuscita a capire cosa fare nella seconda parte della consegna dell'esercizio...


    render(){
        const isDisabled = !this.state.username || !this.state.password;
        return(
        <>
        <input type="text" name="username" onChange={this.handleUsernameChange}/>
        <input type="password" name="password" onChange={this.handlePasswordChange}/>
        <input type="button" name="login" value="login" disabled={isDisabled}/>
        </>
        )
    }
}