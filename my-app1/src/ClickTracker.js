import React from "react";

export class ClickTracker extends React.Component{


    state = {
      button: "",
    };
  
    
    handleLastClicked = (event) => {
        this.setState({button : event.target.name})
    }

    render(){
        return (
            <div>
                <button name="First Button" onClick={this.handleLastClicked}>First Button</button>
                <button name="Second Button" onClick={this.handleLastClicked}>Second Button</button>
                <button name="Third Button" onClick={this.handleLastClicked}>Third Button</button>
                <h1>Last pressed : {this.state.button}</h1>
            </div>
        )
    }
}