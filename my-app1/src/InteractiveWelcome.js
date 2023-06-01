import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component{

    state = {
        value : "",
    }

    handleInputChange = (event) => {
        this.setState({value: event.target.value})
    }

    render(){
        return(
            <div>
                <input type="text" name="username" value={this.state.value} onChange={this.handleInputChange}/>
                <Welcome name = {this.state.value}/>
            </div>
        )
    }
}