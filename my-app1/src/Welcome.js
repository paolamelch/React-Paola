import React from "react";

export class Welcome extends React.Component{
    render(){
        return <p>Welcome,{this.props.name ?? this.defaultProps}!</p>
    }
}

Welcome.defaultProps = {
    name : "Giovanni",
}