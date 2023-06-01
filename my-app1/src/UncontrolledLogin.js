import { createRef } from "react";
import React from "react";

export class UncontrolledLogin extends React.Component{
    _formRef = createRef();
    handleSubmitForm = (event) =>{

        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;


    }

    render(){
        return(
            <div>
                <form ref={this._formRef} onSubmit={this.handleSubmitForm}>
                    <input name="username" autoFocus/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}