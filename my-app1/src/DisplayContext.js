import React, { createContext } from "react";

export const LanguageContext = createContext("en");

export class DisplayContext extends React.Component{
    render(){
        return(
            <div></div>
        )
    }
}