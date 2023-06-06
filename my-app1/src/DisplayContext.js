import React, { createContext } from "react";

export const LanguageContext = createContext("en");

const strings = {
    en : {
        selected : "The language selected is English",
    },
    it : {
        selected : "La lingua selezionata è Italiano"
    }
}

export class DisplayContext extends React.Component{
    render(){
        return(
            <LanguageContext.Consumer>
             {(language) =>{
                return(
                    <h1>{strings[language].selected}</h1>
                )
             }}   
            </LanguageContext.Consumer>
            
        )
    }
}