import React from "react";

export class Counter extends React.Component{

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
        return(
           <>
           Counter : {this.state.count}
        </> 
        ) 
    }
}