import React from "react";

export class ClickCounter extends React.Component{
    
    state = {
        count : 0,
    }

    handleIncrement = () => {
        this.setState({count : this.state.count + 1})
    }

    render(){
        return(
            <div>
                <div>Count: {this.state.count}</div>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        )
    }
}