import React, { createContext } from "react";
import { useContext } from "react";

export const LanguageContext = createContext("en");

const strings = {
    en : {
        selected : "The language selected is English",
    },
    it : {
        selected : "La lingua selezionata è Italiano"
    }
}

export function DisplayContext(){
    const language = useContext(LanguageContext)
    return(
        <h1>{strings[language].selected}</h1>   
    )
}