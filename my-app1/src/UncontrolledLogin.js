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

    componentDidMount(){
        console.log(this._formRef);
        const username = this._formRef.current[0];
        username.focus();
    }

    render(){
        return(
            <div>
                <form ref={this._formRef} onSubmit={this.handleSubmitForm}>
                    <input name="username"/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox"/>
                    <button type="submit">Login</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}