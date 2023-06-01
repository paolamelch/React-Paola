import React from "react";

export class CounterDisplay extends React.Component{
    state = {
        count : this.props.initialValue,
    }

    
    componentDidMount(){
        setInterval(()=>{
            this.setState({count : this.state.count + this.props.incrementBy})
        }
        ,this.props.interval)
    }
    


    render(){
        return <h1>Counter : {this.state.count}</h1>
    }
}